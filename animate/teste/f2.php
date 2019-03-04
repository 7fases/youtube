<html>
<body>
<div style="font-size: 30px; color: red;">
This is f2.html<hr/>
second choice
</div><script type="text/javascript">
    if(self.location==top.location) {
        // get choice from  select

        // just to show multiple cookie pairs work
        document.cookie = "fffoo=zzz";
        // and add the url cookie        
        document.cookie = "url=" + self.location;
        // jump to the page that will home to the iframe
        top.location.replace('testY.html' );
    }
  </script>
</body>
</html>