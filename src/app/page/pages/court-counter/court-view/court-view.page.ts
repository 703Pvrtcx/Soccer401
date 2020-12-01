import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourtService } from 'src/app/services/court.service';

import { CourterService } from 'src/app/services/courter.service';

@Component({
  selector: 'app-court-view',
  templateUrl: './court-view.page.html',
  styleUrls: ['./court-view.page.scss'],
})
export class CourtViewPage implements OnInit {
  public teamNameNotSelected: boolean;
  teamName1: string;
  teamName2: string;
  endGame: boolean;

  
  teams = [];

  constructor(private router:Router, private courtDao: CourterService) {
    this.teamNameNotSelected = true;
    this.endGame =false;
    this.teams = this.courtDao.getClub();
    this.teamName1= 'Pirates';
    this.teamName2 = 'Sundowns';
   }
  ngOnInit() {
  }
  setTeamName(){
    this.teams[0].name = this.teamName1;
    this.teams[1].name = this.teamName2;
    this.teamNameNotSelected = false;
  }
  increaseSomething(i:number){
    this.teams[i].scoreCount +=1;
  }
  decreaseSomething(i:number){
    if(this.teams[i].scoreCount > 0)
    this.teams[i].scoreCount -=1;
  }
  addYellow(i:number){
    this.teams[i].yellowCard +=1;
  }
  addRed(i:number){
    this.teams[i].redCard +=1;
  }
  addOffside(i:number){
    this.teams[i].offSide +=1;
  }
  StopMatch(){
    this.courtDao.addTeam(this.teams[0]);
    this.courtDao.addTeam(this.teams[1]);
    this.viewStats();
  }
  viewStats(){
    this.router.navigateByUrl('court-stats');
  }
}
