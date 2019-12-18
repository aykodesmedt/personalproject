const $eigenWoord = document.querySelector("#inputWoord");

const handleChange = e => {
  console.log(e.key);
  //   console.log($eigenWoord.value);
};

$eigenWoord.addEventListener("keydown", handleChange);
