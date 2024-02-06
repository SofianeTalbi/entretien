// Importation des modules nécessaires depuis Angular
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-studentcrud',
  templateUrl: './studentcrud.component.html',
  styleUrls: ['./studentcrud.component.scss'],
  providers: [DatePipe]
})
export class StudentcrudComponent 
{
  // Déclaration des variables
  citiesList: string[] = ['Paris', 'New York', 'London', 'Tokyo', 'Berlin', ''];
  StudentArray : any[] = [];
  currentStudentID = "";
  firstname: string ="";
  lastname: string ="";
  companyid: string ="";
  position: string ="";
  startdate: Date = new Date(); // Ajoute le champ de date de début
  selectedCity: string = ''; // Initialise la ville sélectionnée
  
  // Constructeur de la classe
  constructor(private http: HttpClient, private location: Location ) 
  {
    // Appelle la méthode pour récupérer tous les étudiants au chargement
    this.getAllStudent();
  }

  // Méthode pour récupérer tous les étudiants depuis le serveur
  getAllStudent() {
    this.http.get("http://localhost:8000/user/getAll")
    .subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.StudentArray = resultData.data;
    });
  }

  // Méthode pour pré-remplir le formulaire avec les données de l'étudiant à mettre à jour
  setUpdate(data: any) 
  {
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.companyid = data.companyid;
    this.position = data.position;
    this.startdate = data.startdate;
    this.selectedCity = data.selectedCity;
    this.currentStudentID = data._id;
  }

  // Méthode pour mettre à jour les enregistrements de l'étudiant
  UpdateRecords() {
    let bodyData = {
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "companyid" : this.companyid,
      "position" : this.position,
      "startdate" : this.startdate,
      "selectedCity" : this.selectedCity,
    };
    
    this.http.patch("http://localhost:8000/user/update"+ "/"+this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Updateddd")
        this.getAllStudent();
        window.location.reload();  // Recharge la page pour afficher les mises à jour
    });
  }
  
  // Méthode pour supprimer un étudiant
  setDelete(data: any) {
    this.http.delete("http://localhost:8000/user/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deletedddd")
        this.getAllStudent();
    });
  }
  
  // Méthode pour enregistrer un nouvel étudiant ou mettre à jour un existant
  save() {
    if (this.isFormValid()) {
      if (this.currentStudentID === '') {
        this.register();
      } else {
        this.UpdateRecords();
      }
    } else {
      alert('Please fill in all the required fields.');
    }
  }
  
  // Méthode pour vérifier si le formulaire est valide
  isFormValid(): boolean {
    return (
      this.firstname !== '' &&
      this.lastname !== '' &&
      this.companyid !== '' &&
      this.position !== '' &&
      this.startdate !== null
    );
  }
  
  // Méthode pour enregistrer un nouvel étudiant
  register() {
    let bodyData = {
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "companyid" : this.companyid, 
      "position" : this.position,
      "startdate" : this.startdate,
      "selectedCity" : this.selectedCity,
    };
    
    console.log('Data sent to server:', bodyData);  // Log les données dans la console
    
    this.http.post("http://localhost:8000/user/create",bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Student Registered Successfully")
      this.firstname = '';
      this.lastname = '';
      this.companyid  = '';
      this.position = '';
      this.startdate = new Date(); // Réinitialise la date de début
      this.selectedCity = '';
      this.getAllStudent();
    });
  }
}
