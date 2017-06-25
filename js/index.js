/**
 * Created by Administrator on 2017/6/11.
 */
function hideAllSecondMenu() {
    document.getElementById("btn_home").style.display = 'none';
    document.getElementById("index_btn_introduce").className='index-btn index-btn-1';
    document.getElementById("index_btn_custom").className='index-btn index-btn-2';
    document.getElementById("index_btn_dress").className='index-btn index-btn-3';
    document.getElementById("index_btn_modern").className='index-btn index-btn-4';
    document.getElementById("introduce_1").style.display = 'none';
    document.getElementById("introduce_2").style.display = 'none';
    document.getElementById("introduce_3").style.display = 'none';

    document.getElementById("custom_1").style.display = 'none';
    document.getElementById("custom_2").style.display = 'none';
    document.getElementById("custom_3").style.display = 'none';
    document.getElementById("custom_4").style.display = 'none';
    document.getElementById("custom_5").style.display = 'none';

    document.getElementById("dress_1").style.display = 'none';
    document.getElementById("dress_2").style.display = 'none';
    document.getElementById("second_level_menu").style.display = 'none';
}
function showMenu_introduce(){
    hideAllSecondMenu();
    document.getElementById("btn_home").style.display = 'block';
    document.getElementById("index_btn_introduce").className='index-btn index-btn-1 index-btn-1-selected';
    document.getElementById("second_level_menu").style.display = 'block';
    document.getElementById("introduce_1").style.display = 'block';
    document.getElementById("introduce_2").style.display = 'block';
    document.getElementById("introduce_3").style.display = 'block';
}
function showMenu_custom(){
    hideAllSecondMenu();
    document.getElementById("btn_home").style.display = 'block';
    document.getElementById("index_btn_custom").className='index-btn index-btn-2 index-btn-2-selected';
    document.getElementById("second_level_menu").style.display = 'block';
    document.getElementById("custom_1").style.display = 'block';
    document.getElementById("custom_2").style.display = 'block';
    document.getElementById("custom_3").style.display = 'block';
    document.getElementById("custom_4").style.display = 'block';
    document.getElementById("custom_5").style.display = 'block';
}
function showMenu_dress(){
    hideAllSecondMenu();
    document.getElementById("btn_home").style.display = 'block';
    document.getElementById("index_btn_dress").className='index-btn index-btn-3 index-btn-3-selected';
    document.getElementById("second_level_menu").style.display = 'block';
    document.getElementById("dress_1").style.display = 'block';
    document.getElementById("dress_2").style.display = 'block';
}
function showMenu_modern(){
    hideAllSecondMenu();
    document.getElementById("btn_home").style.display = 'block';
    document.getElementById("index_btn_modern").className='index-btn index-btn-4 index-btn-4-selected';
}
function showHomePage(){ hideAllSecondMenu(); }