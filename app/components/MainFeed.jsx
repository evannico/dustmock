var React = require('react');
var Post = require('Post');
var MediaPost2 = require('MediaPost2');
var LinkPost = require('LinkPost');

var MainFeed = (props) => {
  return (
    <div>
      <Post
        postProfile="https://s5.postimg.org/60a0qaz0n/rancormock.png"
        postDisplay="Rancor"
        postUsername="therancor"
        ttl="10m"
        postBody="What’s for lunch today? I’m starving! Hopefully @Jabba has something delivered soon!"
        shares="1"
        likes="10"
         />
       <MediaPost2
         postProfile="https://s5.postimg.org/rori1hi2v/mediapostprofile.png"
         postDisplay="TKtrooper"
         postUsername="trooperdude"
         ttl="24m"
         postBody="Hanging out at the Cantina on my break. I can’t believe there are protests to allow Droids in this bar!"
         shares="2"
         likes="13"
         image1='https://s5.postimg.org/71y72f9af/mediaimage2.png'
         image2='https://s5.postimg.org/vjuw4218n/mediaimage1.png'
         />
       <LinkPost
         postProfile="https://s5.postimg.org/vz65x2n5z/urlprofile.png"
         postDisplay="Snoke"
         postUsername="supremeleader"
         ttl="39m"
         postBody="Space Station taken out by farm boy?!"
         shares="4"
         likes="7"
         linkImage="https://s5.postimg.org/s42rui407/urlimage.png"
         linkTitle="Our Empire is Under Attack"
         linkURL="empiredaily.com"
         />
         <Post
           postProfile="https://s5.postimg.org/60a0qaz0n/rancormock.png"
           postDisplay="Rancor"
           postUsername="therancor"
           ttl="10m"
           postBody="What’s for lunch today? I’m starving! Hopefully @Jabba has something delivered soon!"
           shares="1"
           likes="10"
            />
          <MediaPost2
            postProfile="https://s5.postimg.org/rori1hi2v/mediapostprofile.png"
            postDisplay="TKtrooper"
            postUsername="trooperdude"
            ttl="24m"
            postBody="Hanging out at the Cantina on my break. I can’t believe there are protests to allow Droids in this bar!"
            shares="2"
            likes="13"
            image1='https://s5.postimg.org/71y72f9af/mediaimage2.png'
            image2='https://s5.postimg.org/vjuw4218n/mediaimage1.png'
            />
          <LinkPost
            postProfile="https://s5.postimg.org/vz65x2n5z/urlprofile.png"
            postDisplay="Snoke"
            postUsername="supremeleader"
            ttl="39m"
            postBody="Space Station taken out by farm boy?!"
            shares="4"
            likes="7"
            linkImage="https://s5.postimg.org/s42rui407/urlimage.png"
            linkTitle="Our Empire is Under Attack"
            linkURL="empiredaily.com"
            />
            <Post
              postProfile="https://s5.postimg.org/60a0qaz0n/rancormock.png"
              postDisplay="Rancor"
              postUsername="therancor"
              ttl="10m"
              postBody="What’s for lunch today? I’m starving! Hopefully @Jabba has something delivered soon!"
              shares="1"
              likes="10"
               />
             <MediaPost2
               postProfile="https://s5.postimg.org/rori1hi2v/mediapostprofile.png"
               postDisplay="TKtrooper"
               postUsername="trooperdude"
               ttl="24m"
               postBody="Hanging out at the Cantina on my break. I can’t believe there are protests to allow Droids in this bar!"
               shares="2"
               likes="13"
               image1='https://s5.postimg.org/71y72f9af/mediaimage2.png'
               image2='https://s5.postimg.org/vjuw4218n/mediaimage1.png'
               />
             <LinkPost
               postProfile="https://s5.postimg.org/vz65x2n5z/urlprofile.png"
               postDisplay="Snoke"
               postUsername="supremeleader"
               ttl="39m"
               postBody="Space Station taken out by farm boy?!"
               shares="4"
               likes="7"
               linkImage="https://s5.postimg.org/s42rui407/urlimage.png"
               linkTitle="Our Empire is Under Attack"
               linkURL="empiredaily.com"
               />
               <Post
                 postProfile="https://s5.postimg.org/60a0qaz0n/rancormock.png"
                 postDisplay="Rancor"
                 postUsername="therancor"
                 ttl="10m"
                 postBody="What’s for lunch today? I’m starving! Hopefully @Jabba has something delivered soon!"
                 shares="1"
                 likes="10"
                  />
                <MediaPost2
                  postProfile="https://s5.postimg.org/rori1hi2v/mediapostprofile.png"
                  postDisplay="TKtrooper"
                  postUsername="trooperdude"
                  ttl="24m"
                  postBody="Hanging out at the Cantina on my break. I can’t believe there are protests to allow Droids in this bar!"
                  shares="2"
                  likes="13"
                  image1='https://s5.postimg.org/71y72f9af/mediaimage2.png'
                  image2='https://s5.postimg.org/vjuw4218n/mediaimage1.png'
                  />
                <LinkPost
                  postProfile="https://s5.postimg.org/vz65x2n5z/urlprofile.png"
                  postDisplay="Snoke"
                  postUsername="supremeleader"
                  ttl="39m"
                  postBody="Space Station taken out by farm boy?!"
                  shares="4"
                  likes="7"
                  linkImage="https://s5.postimg.org/s42rui407/urlimage.png"
                  linkTitle="Our Empire is Under Attack"
                  linkURL="empiredaily.com"
                  />


    </div>
  )
};

module.exports = MainFeed;
