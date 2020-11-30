import { Component, OnInit } from '@angular/core';
import { CourtService } from 'src/app/services/court.service';
@Component({
  selector: 'app-court-stats',
  templateUrl: './court-stats.page.html',
  styleUrls: ['./court-stats.page.scss'],
})
export class CourtStatsPage implements OnInit {


  teamA  = {} as Team;
  teamB = {} as Team;

  teamAr= [];
  teamBr = [];

  teamObject = {} as Team;

  constructor(private cartDao: CourtService) {

    this.teamAr= this.cartDao.statsA;
    this.teamBr = this.cartDao.statsB;

    this.teamA = this.cartDao.teamA;
    this.teamB  = this.cartDao.teamB;

    console.log('Team ', this.teamAr );
    console.log('Team ', this.teamBr );

    this.teamAr = this.cartDao.getStatisticsA();
    this.teamBr = this.cartDao.getStatisticsB();

   }
  ngOnInit() {
    this.teamAr = this.cartDao.getStatisticsA();
    this.teamBr = this.cartDao.getStatisticsB();
  }
}

