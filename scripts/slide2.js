$(document).ready(function(){
  function panelslide(phead, pbody){
    $(phead).mouseenter(function(){
        $(pbody).slideDown("slow");
    });
    $(phead).mouseleave(function(){
      $(pbody).slideUp("slow");
    });
  };

  panelslide("#homeorg-head", "#homeorg-body");
  panelslide("#dwnsz-head", "#dwnsz-body");
  panelslide("#offetq-head", "#offetq-body");
  panelslide("#tblman-head", "#tblman-body");
  panelslide("#tlkpol-head", "#tlkpol-body");
  panelslide("#tkteen-head", "#tkteen-body");
  panelslide("#coach-head", "#coach-body");
});
