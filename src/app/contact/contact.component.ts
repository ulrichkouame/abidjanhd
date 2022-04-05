import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	form: FormGroup;
	nom: FormControl = new FormControl("", [Validators.required]);
	email: FormControl = new FormControl("", [Validators.required, Validators.email]);
	message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
	honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
	submitted: boolean = false; // show and hide the success message
	isLoading: boolean = false; // disable the submit button if we're loading
	responseMessage: string = ''; // the response message to show to the user
	constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private meta: Meta,
    private titleService: Title
    ) {
		this.form = this.formBuilder.group({
			nom: this.nom,
			email: this.email,
			message: this.message,
			honeypot: this.honeypot
		});
    this.titleService.setTitle('Contactez-nous - Abidjan HD');
    this.meta.updateTag({ name: 'description', content: "Contactez-nous pour toutes vos questions, suggestions ou demandes d'informations." });
	}
	ngOnInit(): void {
	}
	onSubmit() {
		if (this.form.status == "VALID" && this.honeypot.value == "") {
			this.form.disable(); // disable the form if it's valid to disable multiple submissions
			var formData: any = new FormData();
			formData.append("nom", this.form.controls["nom"].value);
			formData.append("email", this.form.controls["email"].value);
			formData.append("message", this.form.controls["message"].value);
			this.isLoading = true; // sending the post request async so it's in progress
			this.submitted = false; // hide the response message on multiple submits

      const token = localStorage.getItem('token');

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

			this.http.post("https://abidjanhd.bigfive.dev/api/contacts", formData, { 'headers': headers } ).subscribe(
				(response: {[key: string]: any} = {}) => {
					// choose the response message
					if (response["alert-type"] == "success") {
						this.responseMessage = "Merci pour le message! Nous vous répondrons très bientôt !";
					} else {
						this.responseMessage = "Oups! Une erreur s'est produite... Rechargez la page et réessayez.";
					}
					this.form.enable(); // re enable the form after a success
					this.submitted = true; // show the response message
					this.isLoading = false; // re enable the submit button
				},
				(error) => {
					this.responseMessage = "Oups! Une erreur s'est produite... Rechargez la page et réessayez.";
					this.form.enable(); // re enable the form after a success
					this.submitted = true; // show the response message
					this.isLoading = false; // re enable the submit button
				}
			);
		}
	}
}
