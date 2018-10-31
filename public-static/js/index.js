let btn=document.querySelector('input[type=button]');

btn.onclick=function(){
	let username=document.querySelector('input[type=text').value;
	let password=document.querySelector('input[type=password]').value;
	let file=document.querySelector('input[type=file]').file[0];
//	ajax
    let xhr=new XMLHttpRequest();
    xhr.open('post','/user/login');
    let form=new FormData();
    form.append('username',username);
    form.append('password',password);
    form.append('photofile',file);
    xhr.send(form);
    xhr.onreadystatechange=function(){
    	if(xhr.status==200&&xhr.readyState==4){
    		console.log(xhr.responseText)
    	}
    }
}
