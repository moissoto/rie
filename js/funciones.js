
/*--La siguiente función evita que el usuario pueda copiar y pegar valores en los campos de confirmación de correo y password--*/

window.onload = function() {
			var email = document.getElementById('inpEmail2');
			var psw = document.getElementById('inpPswd2');
			
			email.onpaste = function(e) {
				e.preventDefault();
				document.getElementById('inpAlertEmail2').style.display = 'block';
				if (document.getElementById('inpEmail2').value != "")
					document.getElementById('inpAlertEmail2').style.display = 'none'
			}
  
			email.oncopy = function(e) {
				e.preventDefault();
				document.getElementById('inpAlertEmail2').style.display = 'block';
				if (document.getElementById('inpEmail2').value != "")
					document.getElementById('inpAlertEmail2').style.display = 'none'
			}
			
			psw.onpaste = function(e) {
				e.preventDefault();
				document.getElementById('inpAlertPsw2').style.display = 'block';
			}
  
			psw.oncopy = function(e) {
				e.preventDefault();
				document.getElementById('inpAlertPsw2').style.display = 'block';
			}
		}

/*--La siguiente función verifica que los campos de correo/confirmación de correo y de password/confirmación de password 
coincidan entre sí de manera respectiva--*/		
		function comprobarCorreo(){ 
			correo1 = document.frmUsuarios.inpEmail.value 
			correo2 = document.frmUsuarios.inpEmail2.value 

			if (correo1 != correo2) 
				document.getElementById('inpAlertEmail').style.display = 'inline'
			else
				document.getElementById('inpAlertEmail').style.display = 'none'
			}

		function comprobarClave(){ 
			clave1 = document.frmUsuarios.inpPswd.value 
			clave2 = document.frmUsuarios.inpPswd2.value 

			if (clave1 == clave2) 
				document.getElementById('inpAlertPsw').style.display = 'none'				
			else 
				document.getElementById('inpAlertPsw').style.display = 'inline' 
			} 