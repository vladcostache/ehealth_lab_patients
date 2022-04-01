import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ModalInfoComponent } from './modals/modal-info/modal-info.component';
import { Patient } from './patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  patients: Patient[] = [];

  public displayedColumns = ['id', 'first_name', 'last_name', 'info'];
  public dataSource = new MatTableDataSource<Patient>();

  constructor(private patientService: PatientService,
    private dialog: MatDialog) {}
  
  ngOnInit(): void {
    this.getPatientsInformation();
  }

  getPatientsInformation() {
    this.patientService.getPatientsInformation()
    .subscribe((res) => {
      this.dataSource.data = res;
    })
  }

  showInfo(element: any) {
    const dialogRef = this.dialog.open(ModalInfoComponent, {
      data: element
    })
  }
}
