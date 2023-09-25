//selecting all required elements
const startBtn = document.querySelector(".startBtn button")
const menuPage = document.querySelector(".menuPage")
const goQuiz = document.querySelector(".menuOptions .goQuiz")
const goBtn = document.querySelector(".menuBtn .goBtn")
const rulesBox = document.querySelector(".rulesBox")
const exitBtn = document.querySelector(".rulesBtn .exitBtn")
const continueBtn = document.querySelector(".rulesBtn .continueBtn")
const Quizes = document.querySelector(".Quizes")
const resultBox = document.querySelector(".resultBox")

const goEbook = document.querySelector(".menuOptions .goBook")
const classBox = document.querySelector(".classBox")
const goMenu = document.querySelector(".topHeader .goMenu")
const eBooks = document.querySelector(".eBooks")
const class_1 = document.querySelector(".classLevel .class1")
const backClassBox = document.querySelector(".eBooks .backClassBox")
const subject = document.querySelector(".subjects .subject")
const pdfViewer = document.querySelector(".pdfViewer")
const exitPdf = document.querySelector(".pdfViewer .exitPdf")

const videos = document.querySelector(".videos")
const goVideo = document.querySelector(".menuOptions .goVideo")
const backMenufVid = document.querySelector(".videos .goMenu")

const videoPlayBox = document.querySelector(".videoPlayBox")
const vidSubject = document.querySelector(".videos .vidSubject")
const exitVideo = document.querySelector(".videoPlayBox .exitVideo")
const videoPlay = document.querySelector(".videoPlayBox .videoPlay")

const audios = document.querySelector(".audios")
const goAudio = document.querySelector(".menuOptions .goAudio")
const backMenufAud = document.querySelector(".audios .goMenu")
const audioPlayBox = document.querySelector(".audPlayBox")
const audSubject = document.querySelector(".audios .audSubject")
const exitAudio = document.querySelector(".audPlayBox .exitAudio")
const audioPlay = document.querySelector(".audPlayBox .audioPlay")

const optionList = document.querySelector("#myOptions")

const timeCount = document.querySelector(".timeCount .seconds")
const timeLine = document.querySelector(".header .timeLines")
const timeOff = document.querySelector(".header .timeLeft")

// if startBtn button clicked
startBtn.onclick = () => {
    menuPage.classList.add("activeMenu")
}

// if goQuiz button clicked
goQuiz.onclick = () => {
    menuPage.classList.remove("activeMenu")
    rulesBox.classList.add("activeInfo")
}


// eBook section

// if goEbook button clicked
goEbook.onclick = () => {
    menuPage.classList.remove("activeMenu")
    classBox.classList.add("activeClasses")
    showPdf(0)
}
// if goMenu button clicked
goMenu.onclick = () => {
    classBox.classList.remove("activeClasses")
    menuPage.classList.add("activeMenu")
}
// if class_1 button clicked
// class_1.onclick = () => {
//     classBox.classList.remove("activeClasses")
//     eBooks.classList.add("activeeBooks")
// }
// if backClassBox button clicked
backClassBox.onclick = () => {
    eBooks.classList.remove("activeeBooks")
    classBox.classList.add("activeClasses")
}
// subject button clicked
subject.onclick = () => {
    eBooks.classList.remove("activeeBooks")
    pdfViewer.classList.add("activePdfViewer")
}
// exitPdf button clicked
exitPdf.onclick = () => {
    eBooks.classList.add("activeeBooks")
    pdfViewer.classList.remove("activePdfViewer")
}

// extra

//  var sectiondiv = document.getElementById("mk");
// function makeList() {

//      const datalist = [
//         "red",
//         "car",
//         "fno",
//         "dfkbdbf"
//      ];
//    for (let i = 0; i < datalist.length; ++i) {
//         var data = `
//         <h1>${datalist[i]}</h1> <br/>
//         `;
//         console.log(i);
//         sectiondiv.innerHTML += data;

//    }
// }

// // Usage
// makeList();

var videolist = document.getElementById("v_list"); 
var videoData = [
    { title: "পদার্থের গঠন X", url: "https://i.ytimg.com/vi/wwc4X8RRiWM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAabnXVuwGeA7gg2EF9Zg_UUyT6WA" },
    { title: "সালোকসংশ্লেষন", url: "https://i.ytimg.com/vi/4ZUeHCDJzh8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8MKTQug99uY4seQcXmPFqyeU-dg" },
    { title: "Physics 2nd Chapter", url: "https://i.ytimg.com/vi/qYYu0dZuY3k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHJxGlXoFzmtwXBl7BREZWbTVOsw" },
    { title: "Physics 2nd Chapter", url: "https://i.ytimg.com/vi/7MPYZZCppzw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBE7al1himeUdAcL58LQYhsp-HvDw" },


];
function videoList() {
   
    for (let i = 0; i < videoData.length; ++i) {
        var model = `
        <div class="vidSuggetion">
            <img src="${videoData[i].url}"
                alt="${videoData[i].title}">
            <div class="vidTitle">${videoData[i].title}</div>
        </div>
        `;
        // var d = `<h1>${i}</h1> <br/>`;
        console.log(videoData[i].title);
        videolist.innerHTML += model;

    }
}

videoList();



function videoItemPlay() {


}
// Video Section

// if goVideo button clicked
goVideo.onclick = () => {
    menuPage.classList.remove("activeMenu")
    videos.classList.add("activeVideos")
}
// if backMenufVid button clicked
backMenufVid.onclick = () => {
    menuPage.classList.add("activeMenu")
    videos.classList.remove("activeVideos")
}
// if vidSubject button clicked
vidSubject.onclick = () => {
    videos.classList.remove("activeVideos")
    videoPlayBox.classList.add("activeVideoPlayBox")
}
// if exitVideo button clicked
exitVideo.onclick = () => {
    videoPlayBox.classList.remove("activeVideoPlayBox")
    videos.classList.add("activeVideos")
    stopVideo(videoPlay)
}
// to stop the running video
var stopVideo = function (videoPlayBox) {
    var iframe = videoPlayBox.querySelector('iframe');
    var video = videoPlayBox.querySelector('video');
    if (iframe) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if (video) {
        video.pause();
    }
};


// ----- Audio Section ------
goAudio.onclick = () => {
    menuPage.classList.remove("activeMenu")
    audios.classList.add("activeAudios")
}
backMenufAud.onclick = () => {
    menuPage.classList.add("activeMenu")
    audios.classList.remove("activeAudios")
}
audSubject.onclick = () => {
    audios.classList.remove("activeAudios")
    audioPlayBox.classList.add("activeAudPlayBox")
}
exitAudio.onclick = () => {
    audioPlayBox.classList.remove("activeAudPlayBox")
    audios.classList.add("activeAudios")
    stopAudio(audioPlay)
}

// to stop the running video
var stopAudio = function (audioPlayBox) {
    var audio = audioPlayBox.querySelector('audio');

    if (audio) {
        audio.pause();
    }
};




// if exitQuiz button clicked
exitBtn.onclick = () => {
    menuPage.classList.add("activeMenu")
    rulesBox.classList.remove("activeInfo")
}

// if continueQuiz button clicked
continueBtn.onclick = () => {
    rulesBox.classList.remove("activeInfo")
    Quizes.classList.add("activeQuiz")
    showQuestion(0);
    startTimer(15)
    startTimerLine(0)
}


let queCount = 0;
let counter;
let timeValue = 15
let counterLine;
let widthValue = 0
let userScore = 0

const replayQuiz = document.querySelector(".finishedBtns .replay")
const exitQuiz = document.querySelector(".finishedBtns .exit")

// if replayQuiz button clicked
replayQuiz.onclick = () => {
    Quizes.classList.add("activeQuiz")
    resultBox.classList.remove("activeResult")
    timeValue = 15
    queCount = 0;
    userScore = 0
    widthValue = 0
    showQuestion(queCount)
    clearInterval(counter)
    clearInterval(counterLine)
    startTimer(timeValue)
    startTimerLine(widthValue)
    nextBtn.style.display = 'none'
    timeOff.textContent = "Time Left"
}

// if exitQuiz button clicked
exitQuiz.onclick = () => {
    // window.location.reload()
    menuPage.classList.add("activeMenu")
    resultBox.classList.remove("activeResult")
}

const nextBtn = document.querySelector(".nextBtn")


// if NextBtn button clicked
nextBtn.onclick = () => {
    if (queCount < questions.length - 1) {
        queCount++;
        showQuestion(queCount)
        clearInterval(counter)
        startTimer(timeValue)
        clearInterval(counterLine)
        startTimerLine(widthValue)
        nextBtn.style.display = 'none'
        timeOff.textContent = "Time Left"
    }
    else {
        clearInterval(counter)
        clearInterval(counterLine)
        console.log('You have complete your task!')
        showResultBox()
    }
}


// getting questions and options from array
function showQuestion(index) {
    const queText = document.querySelector(".que-text")

    //creating a new span and div tag for question and option and passing the value using array index
    let queTag = '<span>' + '<h2>' + questions[index].num + '. ' + questions[index].question + '</h2>' + '</span>';
    let optionTag = '<div class="option">' + questions[index].options[0] + '</div>'
        + '<div class="option">' + questions[index].options[1] + '</div>'
        + '<div class="option">' + questions[index].options[2] + '</div>'
        + '<div class="option">' + questions[index].options[3] + '</div>'
    queText.innerHTML = queTag
    optionList.innerHTML = optionTag

    // set onclick attribute to all available options
    const option = optionList.querySelectorAll(".option")
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }


    // set totalQuestion tag to the bottom
    const totalQuestion = document.querySelector(".totalQuestion")
    let totalQuestionTag = '<p>' + questions[index].num + ' of ' + questions.length + ' Questions' + '</p>'
    totalQuestion.innerHTML = totalQuestionTag

}


// creating the new div tags which for icons
let tickIcon = '<div class="tick icon"><i class="fa-solid fa-check"></i>    </div>'
let crossIcon = '<div class="cross icon"><i class="fa-solid fa-xmark"></i></div>'

//if user clicked on option
function optionSelected(answer) {
    clearInterval(counter)
    clearInterval(counterLine)
    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer
    let alloptions = optionList.children.length
    if (userAns == correctAns) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct")
        console.log('Ans is correct')
        answer.insertAdjacentHTML("beforeend", tickIcon)
    }
    else {
        answer.classList.add("incorrect")
        console.log('Ans is wrong')
        answer.insertAdjacentHTML("beforeend", crossIcon)

        for (let i = 0; i < alloptions; i++) {
            if (optionList.children[i].textContent == correctAns) {
                optionList.children[i].setAttribute("class", "option correct")
                optionList.children[i].insertAdjacentHTML("beforeend", tickIcon)
            }
        }
    }


    for (let i = 0; i < alloptions; i++) {
        optionList.children[i].classList.add("disabled");
    }
    nextBtn.style.display = 'block'

}

// Show Quiz Result
function showResultBox() {
    rulesBox.classList.remove("activeInfo")
    Quizes.classList.remove("activeQuiz")
    resultBox.classList.add("activeResult")
    const scoreText = document.querySelector(".scoreText")
    if (userScore > 3) {
        let scoreTag = '<h1 class="greetings">Congrats! 🎉</h1><span>You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>'
        scoreText.innerHTML = scoreTag
    }
    else if (userScore > 1) {
        let scoreTag = '<h1 class="greetings">Nice! 😎</h1><span>You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>'
        scoreText.innerHTML = scoreTag
    }
    else {
        let scoreTag = '<h1 class="greetings">Sorry! 😐</h1><span>You got Only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>'
        scoreText.innerHTML = scoreTag
    }
}


// Timer Section
function startTimer(time) {
    counter = setInterval(timer, 1000)
    function timer() {
        timeCount.textContent = time
        time--
        if (time < 9) {
            let addZero = timeCount.textContent
            timeCount.textContent = 0 + addZero
        }
        if (time < 0) {
            clearInterval(counter)
            timeCount.textContent = '00'
            timeOff.textContent = "Time Off"


            let correctAns = questions[queCount].answer
            let alloptions = optionList.children.length

            for (let i = 0; i < alloptions; i++) {
                if (optionList.children[i].textContent == correctAns) {
                    optionList.children[i].setAttribute("class", "option correct")
                    optionList.children[i].insertAdjacentHTML("beforeend", tickIcon)
                }
            }
            for (let i = 0; i < alloptions; i++) {
                optionList.children[i].classList.add("disabled");
            }

            nextBtn.style.display = 'block'
        }
    }
}


// Timer Line Section
function startTimerLine(time) {
    counterLine = setInterval(timer, 50)
    function timer() {
        time += 1
        timeLine.style.width = time + 'px'
        if (time > 319) {
            clearInterval(counterLine)
        }
    }
}


const studentLogin = document.querySelector(".studentLogin")
const goStudentLogin = document.querySelector(".menuOptions .goStudent")
const backMenufStLogin = document.querySelector(".studentLogin .exitStLogin")

goStudentLogin.onclick = () => {
    menuPage.classList.remove("activeMenu")
    studentLogin.classList.add("activeStLogin")
}
backMenufStLogin.onclick = () => {
    menuPage.classList.add("activeMenu")
    studentLogin.classList.remove("activeStLogin")
}

const TeacherLogin = document.querySelector(".studentLogin")
const goTeacherLogin = document.querySelector(".menuOptions .goTeacher")
const backMenufTrLogin = document.querySelector(".studentLogin .exitStLogin")

goTeacherLogin.onclick = () => {
    menuPage.classList.remove("activeMenu")
    studentLogin.classList.add("activeStLogin")
}
backMenufTrLogin.onclick = () => {
    menuPage.classList.add("activeMenu")
    studentLogin.classList.remove("activeStLogin")
}



// ----------- ebooks ------------------

const classLevel = document.querySelector(".classLevel")

function showPdf(index) {
    let levelOpt = ''
    for (var i = 0; i < books.length; i++) {
        ind = books[i].class

        let temp = '<div class="LevelOption">' + "Class - " + ind + '</div>'
        levelOpt += temp

    }
    classLevel.innerHTML = levelOpt
    ind.onclick = () => {
        classBox.classList.remove("activeClasses")
        eBooks.classList.add("activeeBooks")
    }


    // // set onclick attribute to all available options
    // const option = optionList.querySelectorAll(".option")
    // for(let i = 0; i < option.length; i++){
    //     option[i].setAttribute("onclick", "optionSelected(this)")
    // }


    // // set totalQuestion tag to the bottom
    // const totalQuestion = document.querySelector(".totalQuestion")
    // let totalQuestionTag = '<p>' + questions[index].num + ' of ' + questions.length + ' Questions' + '</p>'
    // totalQuestion.innerHTML = totalQuestionTag

}