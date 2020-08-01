import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "app-file-uploader",
    templateUrl: "./file-uploader.component.html",
    styleUrls: ["./file-uploader.component.scss"],
})
export class FileUploaderComponent implements OnInit {
    ngOnInit() {}

    @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;
    files: any[] = [];

    /**
     * on file drop handler
     */
    onFileDropped($event) {
        this.prepareFilesList($event);
    }

    /**
     * handle file from browsing
     */
    fileBrowseHandler(files) {
        this.prepareFilesList(files);
    }

    /**
     * Delete file from files list
     * @param index (File index)
     */
    deleteFile(index: number) {
        if (this.files[index].progress < 100) {
            console.log("Upload in progress.");
            return;
        }
        this.files.splice(index, 1);
    }

    /**
     * Simulate the upload process
     */
    uploadFilesSimulator(index: number) {
        const progressInterval = setInterval(() => {
            if (this.files[index].progress >= 100) {
                clearInterval(progressInterval);
            } else {
                this.files[index].progress += 1;
            }
        }, 10);
    }

    /**
     * Convert Files list to normal array list
     * @param files (Files List)
     */
    prepareFilesList(files: Array<any>) {
        for (const item of files) {
            item.progress = 0;
            this.files.push(item);
        }
        this.fileDropEl.nativeElement.value = "";
        this.uploadFilesSimulator(0);
    }

    /**
     * format bytes
     * @param bytes (File size in bytes)
     * @param decimals (Decimals point)
     */
    formatBytes(bytes, decimals = 2) {
        if (bytes === 0) {
            return "0 Bytes";
        }
        const k = 1024;
        const dm = decimals <= 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return (
            parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
        );
    }
}
