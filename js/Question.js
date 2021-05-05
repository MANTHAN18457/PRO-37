class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
   // this.note1 = createElement('h2')
   // this.title1 = createElement('h1')

  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- WHAT IS THE CAPITAL OF GUJARAT ? " );
    this.question.position(70, 80)
    this.option1.html("1: GANDHINAGAR " );
    this.option1.position(70, 110);
    this.option2.html("2: SURAT " );
    this.option2.position(70, 130);
    this.option3.html("3: AMDAVAD " );
    this.option3.position(70, 150);
    this.option4.html("4: RAJKOT " );
    this.option4.position(70, 170);
   

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      //this.note1.html("NOTE : THE PERSON WHO HAS GIVEN ANSWER WRITE IS -->")
      //this.note1.position(70,200)
     // this.title1.html("__YOUR RESULT__")
     
     
     // this.title1.position(350,0)
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
