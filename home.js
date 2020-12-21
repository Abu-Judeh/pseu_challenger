function setGradient()
{

  document.getElementById('colorpicker_1').addEventListener('input',function()
  {
     let color_change_1=document.getElementById('colorpicker_1').value;
       document.documentElement.style.setProperty('--first_Color',color_change_1);
  })   
  document.getElementById('colorpicker_2').addEventListener('input',function()
  {
     let color_change_2=document.getElementById('colorpicker_2').value;
       document.documentElement.style.setProperty('--second_Color',color_change_2);
  })   


}

function go_To_Ask_Function() {
  document.documentElement.scrollTop =  1100; // For Chrome, Firefox, IE and Opera
}
function go_To_Speedo_Function() {
  document.documentElement.scrollTop =  2200; // For Chrome, Firefox, IE and Opera
}