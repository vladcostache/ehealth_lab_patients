import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnInit {
  constructor(private dialogRef:  MatDialogRef<ModalInfoComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
  }

  ngOnInit(): void {
  }

  public close() {
    this.dialogRef.close();
  }

}
