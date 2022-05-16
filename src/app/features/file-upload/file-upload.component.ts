import { Component, OnInit, EventEmitter } from '@angular/core';
import { FileUploadService } from 'src/app/core/services/file-upload.service';

import { Output } from '@angular/core';

@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @Output() img = new EventEmitter<any>();


  imgLink(url: any) {
    this.img.emit(url);
  }

	// Variable to store shortLink from api response
	shortLink: string = "";
	loading: boolean = false; // Flag variable
	file!: File ; // Variable to store file

	// Inject service
	constructor(private fileUploadService: FileUploadService) { }

	ngOnInit(): void {
	}

	// On file Select
	onChange(event: any) {
		this.file = event.target.files[0];

    //Send file to parent component
    this.imgLink(this.file);

	}

	// OnClick of button Upload
	onUpload() {
		this.loading = !this.loading;
		console.log(this.file);
		this.fileUploadService.upload(this.file).subscribe(
			(event: any) => {
        console.log(event);

				if (typeof (event) === 'object') {

					// Short link via api response
					this.shortLink = event.link;

          //Send link to parent component
          this.imgLink(this.shortLink);

					this.loading = false; // Flag variable
				}
			}
		);
	}
}
