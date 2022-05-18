
$(document).ready(function(){
    $("#btn").click(function () {
        axios.get("https://jsonplaceholder.typicode.com/posts?id=1", {
           
          })
          .then(function (response) {
            response.data.forEach(element => {
                $(".card").append(
                    `<p>${element.title}</p>`
                )
                
            });
          })
          .catch(function (error) {
            console.log(error);
          })
    })
})