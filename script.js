//https://sm.ign.com/ign_br/screenshot/default/sandman-poster-netflix_zjaz.jpg (Sandman)

//https://s2.glbimg.com/4UlWhOyaots5oF8nPO98O6OXOeM=/620x800/top/e.glbimg.com/og/ed/f/original/2021/08/04/image_rYCXOQv.png (Lucifer)

//https://cinema10.com.br/upload/featuredImage.php?url=https%3A%2F%2Fcinema10.com.br%2Fupload%2Fseries%2Fseries_1786_MV5BMjI5NTUyMjc4MV5BMl5BanBnXkFtZTgwODc3MzA0NzM%40._V1_SY1000_CR0%2C0%2C677%2C1000_AL_.jpg (Doom Patrol)

//https://1.bp.blogspot.com/-dFjW_lGU-A0/XZabbHJpLPI/AAAAAAAABvM/_iNJpaIF39MPI8oYuZtagJ9CJC6SwGxowCLcBGAsYHQ/s1600/blacklist.png (Blacklist)


var listaSeries = ["https://sm.ign.com/ign_br/screenshot/default/sandman-poster-netflix_zjaz.jpg", "https://s2.glbimg.com/4UlWhOyaots5oF8nPO98O6OXOeM=/620x800/top/e.glbimg.com/og/ed/f/original/2021/08/04/image_rYCXOQv.png", "https://cinema10.com.br/upload/featuredImage.php?url=https%3A%2F%2Fcinema10.com.br%2Fupload%2Fseries%2Fseries_1786_MV5BMjI5NTUyMjc4MV5BMl5BanBnXkFtZTgwODc3MzA0NzM%40._V1_SY1000_CR0%2C0%2C677%2C1000_AL_.jpg", "https://1.bp.blogspot.com/-dFjW_lGU-A0/XZabbHJpLPI/AAAAAAAABvM/_iNJpaIF39MPI8oYuZtagJ9CJC6SwGxowCLcBGAsYHQ/s1600/blacklist.jpg"]

var nomeSeries = ["Sandman", "Lucifer", "Doom Patrol", "Blacklist"]
                  
var i = 0;
while(i < listaSeries.length){
  //document.write();
  document.write("<p><img src=" + listaSeries[i] + ">" + nomeSeries[i] + "</p>");
  //document.write("<h3>"+nomeSeries[i]+"</h3>");
  //document.write();
  i++;
}
