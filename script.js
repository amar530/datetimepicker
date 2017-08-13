 $(document).ready(function() {   
      $('#datetimepicker').datetimepicker({
        format: 'dd/MM/yyyy hh:mm:ss'});
    });
     var d=new Date();
      var offset=d.getTimezoneOffset();
      // console.log(offset);
      // d.setMinutes(d.getMinutes()+offset);
      // console.log(d);
      var india_offset=5.5*60;
      d.setMinutes(d.getMinutes()+india_offset);
      function toTimeZone() {   
       alert("India time is :"+d);
      console.log("Indian standard time :"+d);
      $("#view").text("India Time :"+d);
    }