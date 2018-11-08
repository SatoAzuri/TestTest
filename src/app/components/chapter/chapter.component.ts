import { Component, OnInit } from '@angular/core';
import { SigninService } from './../../signin.service';


@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  admin: boolean = false;
  fromDB: boolean = true;
  user: any;
  chapters = [
    {
      id: 1,
      name: "Chapter1",
      type: "Math",
      content: [
        {
          id: 1,
          title: "1.1 What are number.",
          content: "A number is a basic unit of mathematics. Numbers are used for counting, measuring, and comparing amounts. A number system is a set of symbols, or numerals, that are used to represent numbers. The most common number system uses 10 symbols called digits—0, 1, 2, 3, 4, 5, 6, 7, 8, and 9—and combinations of these digits.",
          pic: "assets/numbers.png",
          video: "https://www.youtube.com/embed/yxAIBFsRpqU"
        },
        {
          id: 2,
          title: "1.2 How numbers help us.",
          content: "Numbers play an important role in our lives. Almost all the things we do involve numbers and Mathematics. Whether we like it or not, our life revolves in numbers since the day we were born. There are numerous numbers directly or indirectly connected to our lives. The following are some uses of numbers in our daily life: \n1.Calling a member of a family or a friend using mobile phone.\n2.Weighing fruits, vegetables, meat, chicken, and others in market.\n3.Using elevators to go places or floors in the building.\n4.Looking at the price of discounted items in a shopping mall.\n5.Telling time you spent on work or school.",
          pic: "assets/education.jpg",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        }
      ]
    },
    {
      id: 2,
      name: "Chapter2",
      type: "Music",
      content: [
        {
          id: 1,
          title: "Learn Notes",
          content: "Text3",
          pic: "assets/numbers.png",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        },
        {
          id: 2,
          title: "Learn Instruments",
          content: "Text4",
          pic: "assets/numbers.png",
          video: "<iframe style='width: 50 %; float: left; height: 255px' src='https://www.youtube.com/embed/yxAIBFsRpqU' frameborder = '0' allow='autoplay; encrypted-media' allowfullscreen> </iframe>"
        },
      ]
    }
  ];
  constructor(private ser: SigninService) {
    this.user = ser.getUser();
  }

  ngOnInit() {
  }

}
