 function disableselect(e){return false};
        function reEnable(){return true};
        document.onselectstart=new Function("return false");
        if (window.sidebar){
            document.onmousedown = disableselect;
            document.onclick = reEnable;
        }
        const number = document.querySelector('.number');
        const matn_random = document.querySelector('.matn_random');
        const code_random = document.querySelector('.code_random');
        const taeed = document.querySelector('.taeed');
        const ok = document.querySelector('.ok');
        let number_sahih = '';
        number.addEventListener('change', number1);
        code_random.addEventListener('click', code_rand);
        taeed.addEventListener('click', taeedye);
        let english = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H","j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q","r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];
        let adad = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let colar = ["red", "blue", "green", "yellow", "brown", "gray", "orange", "pink", "violet", ];
        let member = english[Math.floor(Math.random() * english.length)] + english[Math.floor(Math.random() * english.length)] + adad[Math.floor(Math.random()* adad.length)] + english[Math.floor(Math.random() * english.length)] + adad[Math.floor(Math.random()* adad.length)];
        matn_random.innerText = member;
        matn_random.style.color = colar[Math.floor(Math.random() * colar.length)];
        function number1(e){
            number_sahih = e.target.value;
        };
        let a ;
        const color_time = document.getElementById('timer');
        document.getElementById('timer').innerHTML = 000 + ":" + 20; startTimer();
        function startTimer(){
            let presentTime = document.getElementById('timer').innerHTML;
            let timeArray = presentTime.split(/[:]+/);
            let m = timeArray[0];
            let s = checkSecound((timeArray[1] - 1));
            if(s==59){m=m-1}
            document.getElementById('timer').innerHTML = m + ":" + s;
            a = setTimeout(startTimer, 1000);
        }
        function checkSecound(sec){
            if(sec < 10 && sec >= 0){
                sec = "0" + sec;
            };
            if(sec < 0){
                sec = clearTimeout(a);
                sec = '0';
                taeed.removeEventListener('click', taeedye);
            };
            if(sec <= 20){
                color_time.style.color = 'green';
            }if(sec < 15){
                color_time.style.color = 'orange';
            }if(sec < 10){
                color_time.style.color = 'yellow';
            }if(sec <= 6){
                color_time.style.color = 'red';
            }
            return sec;
        }

        function code_rand(){
            let member = english[Math.floor(Math.random() * english.length)] + english[Math.floor(Math.random() * english.length)] + adad[Math.floor(Math.random()* adad.length)] + english[Math.floor(Math.random() * english.length)] + adad[Math.floor(Math.random()* adad.length)];
            matn_random.innerText = member;
            matn_random.style.color = colar[Math.floor(Math.random() * colar.length)];
            document.getElementById('timer').innerHTML = 000 + ":" + 20; startTimer();
            function startTimer(){
                taeed.addEventListener('click', taeedye);
                let presentTime = document.getElementById('timer').innerHTML;
                let timeArray = presentTime.split(/[:]+/);
                let m = timeArray[0];
                let s = checkSecound((timeArray[1] - 1));
                if(s==59){m=m-1}
                document.getElementById('timer').innerHTML = m + ":" + s;
            }
            function checkSecound(sec){
                if(sec < 10 && sec >= 0){
                    sec = "0" + sec;
                };
                if(sec < 0){
                    taeed.removeEventListener('click', taeedye);
                };
                return sec;
            }
        };
        function taeedye(){
            ok.innerText = "";
            let value_tag_p = matn_random.childNodes[0].nodeValue;
            if(number_sahih.toLowerCase() == value_tag_p.toLowerCase()){
                if(number_sahih.length == 5){
                    const matn_auto_script = "تبریک کد را درست وارد کرده اید";
                    const string_auto_script = matn_auto_script.split("");
                    (function anim(){
                        let running = setTimeout(anim, 50);
                        string_auto_script.length > 0 ? ok.innerHTML += string_auto_script.shift() : clearTimeout(running);
                        ok.style.color = 'green';
                    })();
                }else if(number_sahih.length == 0){
                    const matn2_auto_script = "لطفا مقدار کد بالا را وارد کنید";
                    const string2_auto_script = matn2_auto_script.split("");
                    (function anim2(){
                        let running2 = setTimeout(anim2 , 50);
                        string2_auto_script.length > 0 ? ok.innerHTML += string2_auto_script.shift() : clearTimeout(running2);
                        ok.style.color = 'yellow';
                    })();
                }else{
                    const matn3_auto_script = "تعداد کد وارد شده درست نیست";
                    const string3_auto_script = matn3_auto_script.split("");
                    (function anim(){
                        let running3 = setTimeout(anim, 50);
                        string3_auto_script.length > 0 ? ok.innerHTML += string3_auto_script.shift() : clearTimeout(running3);
                        ok.style.color = 'blue';
                    })();
                }
            }else{
                if(number_sahih.length == 5){
                    const matn2_auto_script = "کد را درست وارد نکرده اید لطفا دوباره سعی کنید";
                    const string2_auto_script = matn2_auto_script.split("");
                    (function anim2(){
                        let running2 = setTimeout(anim2 , 50);
                        string2_auto_script.length > 0 ? ok.innerHTML += string2_auto_script.shift() : clearTimeout(running2);
                        ok.style.color = 'red';
                    })();
                }else if(number_sahih.length == 0){
                    const matn2_auto_script = "لطفا مقدار کد بالا را وارد کنید";
                    const string2_auto_script = matn2_auto_script.split("");
                    (function anim2(){
                        let running2 = setTimeout(anim2 , 50);
                        string2_auto_script.length > 0 ? ok.innerHTML += string2_auto_script.shift() : clearTimeout(running2);
                        ok.style.color = 'yellow';
                    })();
                }else{
                    const matn3_auto_script = "تعداد کد وارد شده درست نیست";
                    const string3_auto_script = matn3_auto_script.split("");
                    (function anim(){
                        let running3 = setTimeout(anim, 50);
                        string3_auto_script.length > 0 ? ok.innerHTML += string3_auto_script.shift() : clearTimeout(running3);
                        ok.style.color = 'blue';
                    })();
                }
                // ok.innerText = "کد را درست وارد نکرده اید لطفا دوباره سعی کنید";
            }
        }
        const body = document.querySelector('.body');
        const toop = document.querySelector('.toop');
        setInterval(() => {
            let string = "ℳ𝒜ℋ𝒟ℐ";
            let str = document.querySelector('.whrite');
            let split = string.split("");
            (function anim(){
                let color = ["red", "blue", "green", "yellow", "brown", "gray", "orange", "pink", "violet", ];
                str.style.color = color[Math.floor(Math.random() * color.length)];
                let running = setTimeout(anim, 500);
                split.length > 0 ? str.innerHTML += split.shift() : clearTimeout(running);
            })();
        }, 4000);
        setInterval(function(){
            let str = document.querySelector('.whrite');
            if(str != ""){
                str.innerText = "";
            }
        }, 3989);
        toop.addEventListener('click', toope);
        function toope(){
            if(toop.style.float == 'right'){
                toop.style.float = 'left';
                body.style.background = 'gray';
            }else{
                toop.style.float = 'right';
                body.style.background = 'black';
            }
        }
