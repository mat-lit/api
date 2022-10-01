$.ajax({
    url: "http://api.wossidia.de/isebelindex",
    type: "get", 
    data: { 
      word: "moort",
    },
    dataType: "json",
    success: function(response) {
      console.log(response)
    },
    error: function(xhr) {
      console.log(xhr)
    }
  });