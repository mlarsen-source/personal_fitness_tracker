document.getElementById('workout-form').onsubmit = () => {
  
  let isValid = true;
  clearErrors();

  let type = document.getElementById('type').value.trim();
  let duration = document.getElementById('duration').value.trim();
  let intensity = document.getElementsByName('intensity');
  let date = document.getElementById('date').value.trim();
  

  // validate workout type selected
  if (type === "" || type === "none") 
  {
    document.getElementById('err-type').style.display = "block";
    isValid = false;
  }


  // validate workout duration was entered and is a number greater than 0
  if (duration === "" || isNaN(duration) || duration <= 0) 
  {
    document.getElementById('err-duration').style.display = "block";
    isValid = false;
  }


  // validate workout intensity level was selected
  let count = 0;
  for(let i = 0; i<intensity.length; i++)
  {
    if (intensity[i].checked)
    {
      count++;
    }

  }
  if (count === 0)
  {
    document.getElementById('err-intensity').style.display = "block";
    isValid = false;
  }


  // validate workout date was selected
  if (date === "")
  {
    document.getElementById('err-date').style.display = "block";
    isValid = false;
  }
  return isValid;
}


// remove displayed errors when they have been corrected by client
function clearErrors()
{
  let errors = document.getElementsByClassName('err');
  for(let i = 0; i<errors.length; i++)
  {
    errors[i].style.display = "none";
  }
}
