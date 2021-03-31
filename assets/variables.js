src="https://kit.fontawesome.com/6478f529f2.js"
    crossorigin="anonymous"

    function user_component_xl(avatarNumber,name,subtitle){
        document.write(
          '<div class="user-component"><div class="user-component__column" ><img class="user-component__avatar user-component__avatar--xl" src="../assets/images/avatars/avatar_'+avatarNumber+'.svg" ><div class="user-component__text"><h4 class="user-component__title user-component__title--not-bold">'+
          name+'</h4><h6 class="user-component__subtitle">'+
          subtitle+'</h6></div></div><div class="user-component__column"></div></div>'
        )
      }
function user_component_xs(avatarNumber,name,subtitle){
    document.write(
      '<div class="user-component"><div class="user-component__column" ><img class="user-component__avatar user-component__avatar--sm" src="../assets/images/avatars/avatar_'+avatarNumber+'.svg" ><div class="user-component__text"><h4 class="user-component__title user-component__title--not-bold">'+
      name+'</h4><h6 class="user-component__subtitle">'+
      subtitle+'</h6></div></div><div class="user-component__column"></div></div>'
    )
  }

  function user_component_xs_music(avatarNumber,name,subtitle,profileMusicTitle){
    document.write(
      '<div class="user-component"><div class="user-component__column" ><img class="user-component__avatar user-component__avatar--sm" src="../assets/images/avatars/avatar_'+avatarNumber+'.svg" ><div class="user-component__text"><h4 class="user-component__title user-component__title--not-bold">'+
      name+'</h4><h6 class="user-component__subtitle">'+
      subtitle+'</h6></div></div><div class="user-component__column"><div class="user-component__profile-music__xs"><h6 class="user-component__profile-music__title">'+profileMusicTitle+'</h6><img src="../assets/images/avatars/musicplay-icon.svg" ></div></div></div>'
    )
  }