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

  teamName1: string;
  teamName2: string;

   public teamNameNotSelected: boolean;
  endGame: boolean;
  teamA = {} as Team;
  teamB = {} as Team;

  teams = [];
  constructor(private router:Router, private courtDao: CourterService) {
    this.teamNameNotSelected = true;
    this.endGame =false;
    this.teams = this.courtDao.getClub();
    this.teams[0].name = 'The Blue Team';
    this.teams[1].name = "The Red Team";
   }
  ngOnInit() {
    this.teams = this.courtDao.getClub();
    console.log(this.teams[0]);
  }
  setTeamName(){
    this.teams[0].name = this.teamName1;
    this.teams[1].name = this.teamName2;
  }
  addTeams(){
    //Adding to the statistics Array we going to use throughout our program
    this.courtDao.addTeam(this.teams);
    console.log(this.courtDao.getTeam());
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
    this.endGame = true;
  }
  viewStats(){
    this.router.navigateByUrl('court-stats');
  }

}
