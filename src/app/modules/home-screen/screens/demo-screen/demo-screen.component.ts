import { CommonApiService } from './../../services/common-api.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-demo-screen',
  templateUrl: './demo-screen.component.html',
  styleUrls: ['./demo-screen.component.css'],
})
export class DemoScreenComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.minLength(4)]);
  email = new FormControl('', [Validators.required, Validators.minLength(20)]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10),
  ]);
  address = new FormControl('', [
    Validators.required,
    Validators.minLength(20),
    Validators.maxLength(150),
  ]);

  constructor(private commonApi: CommonApiService) {}

  ngOnInit(): void {}

  //2
  groupItem() {
    let people = [
      { name: 'Alice', age: 21 },
      { name: 'max', age: 21 },
      { name: 'Bill', age: 25 },
      { name: 'jane', age: 22 },
      { name: 'anna', age: 25 },
    ];

    return people.reduce(function (groupByAge, person) {
      groupByAge[person.age] = groupByAge[person.age] || [];
      groupByAge[person.age].push(person.name);
      return groupByAge;
    }, Object.create(null));
  }

  //3
  findLagest() {
    let arr = [12, 39, 41, 14, 67, 35, 27, 25];
    let n = 1;
    return arr.sort()[arr.length - n];
  }

  //4
  getUserDataDetails() {
    this.commonApi.getUserData('1234').subscribe({
      next: (v) => {
        console.log(v.name);
        console.log(v.email);
        console.log(v.phoneNumber);
        console.log(v.address);
      },
      error: (e) => console.error(e),
    });
  }

  //5
  removeDuplicates() {
    let arr = [2, 8, 2, 9, 17, 15, 8];

    const uniqueArray: number[] = [];
    const tempObject: any = {};
    arr.forEach((item) => {
      const isExsit = tempObject[item];
      if (!isExsit) {
        uniqueArray.push(item);
        tempObject[item] = item;
      }
    });
    return uniqueArray;
  }
}
