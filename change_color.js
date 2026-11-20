    const applyButton1 = document.getElementById('applyButton1');
    const applyButton2 = document.getElementById('applyButton2');
    const applyButton3 = document.getElementById('applyButton3');
    const colorPicker1 = document.getElementById('colorPicker1');
    const colorPicker2 = document.getElementById('colorPicker2');
    const colorPicker3 = document.getElementById('colorPicker3');
    const visButton1 = document.getElementById('visButton1'); 
    const visButton2 = document.getElementById('visButton2');
    const visButton3 = document.getElementById('visButton3');
    const nowColor1Txt = document.getElementById('nowColor1Txt');
    const nowColor2Txt = document.getElementById('nowColor2Txt');
    const nowColor3Txt = document.getElementById('nowColor3Txt');
    

    applyButton1.addEventListener('click', () => {
    const color1 = document.getElementById('colorPicker1').value;
    document.documentElement.style.setProperty('--main1-color', color1);
    nowColor1Txt.textContent = color1;
    });
  
    applyButton2.addEventListener('click', () => {
    const color2 = document.getElementById('colorPicker2').value;
    document.documentElement.style.setProperty('--main2-color', color2);
    nowColor2Txt.textContent = color2;
    });
  
    applyButton3.addEventListener('click', () => {
    const color3 = document.getElementById('colorPicker3').value;
    document.documentElement.style.setProperty('--main3-color', color3);
    nowColor3Txt.textContent = color3;
    });
  
    bgMainW.addEventListener('click', () => {
    document.documentElement.style.setProperty('--bg-main-color', "#ffffff");
    });
  
    bgMainB.addEventListener('click', () => {
    document.documentElement.style.setProperty('--bg-main-color', "#000000");
    });
  
    colorPicker1.addEventListener('change', () => {
    const color1h = document.getElementById('colorPicker1').value;
    document.documentElement.style.setProperty('--main1h-color', color1h);
    });
  
    colorPicker2.addEventListener('change', () => {
    const color2h = document.getElementById('colorPicker2').value;
    document.documentElement.style.setProperty('--main2h-color', color2h);
    });
  
    colorPicker3.addEventListener('change', () => {
    const color3h = document.getElementById('colorPicker3').value;
    document.documentElement.style.setProperty('--main3h-color', color3h);
    });
  
  
    visButton1.addEventListener('click', () => {
      if (visButton1.textContent === '表示') {
        document.documentElement.style.setProperty('--main1-opacity', "1");
        visButton1.textContent = '非表示';
      } 
      else {
        document.documentElement.style.setProperty('--main1-opacity', "0");
        visButton1.textContent = '表示';
      }
    });
  
    visButton2.addEventListener('click', () => {
      if (visButton2.textContent === '表示') {
        document.documentElement.style.setProperty('--main2-opacity', "1");
        visButton2.textContent = '非表示';
      } 
      else {
        document.documentElement.style.setProperty('--main2-opacity', "0");
        visButton2.textContent = '表示';
      }
    });
    
    visButton3.addEventListener('click', () => {
      if (visButton3.textContent === '表示') {
        document.documentElement.style.setProperty('--main3-opacity', "1");
        visButton3.textContent = '非表示';
      } 
      else {
        document.documentElement.style.setProperty('--main3-opacity', "0");
        visButton3.textContent = '表示';
      }
    });
  