document.addEventListener('DOMContentLoaded', () => {
	const toggler = document.getElementById('toggler');
	const navbar = document.querySelector('.navbar');
  
	toggler.addEventListener('change', () => {
	  if (toggler.checked) {
		navbar.style.display = 'block';
	  } else {
		navbar.style.display = 'none';
	  }
	});
  });

  window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	const logo = document.querySelector('.logo');
	const navbarLinks = document.querySelectorAll('.navbar a');
	const icons = document.querySelectorAll('.icons a');
  
	if (window.scrollY > 100) {
	  header.classList.add('scrolled');
	  logo.style.color = '#333'; 
	  navbarLinks.forEach(link => {
		link.style.color = '#333';
		link.addEventListener('mouseover', () => (link.style.color = 'var(--blue)'));
		link.addEventListener('mouseout', () => (link.style.color = '#333'));
	  }); 
	  icons.forEach(icon => {
		icon.style.color = '#333';
		icon.addEventListener('mouseover', () => (icon.style.color = 'var(--blue)'));
		icon.addEventListener('mouseout', () => (icon.style.color = '#000'));
	  }); 
	} else {
	  header.classList.remove('scrolled');
	  logo.style.color = '#ffffff'; 
	  navbarLinks.forEach(link => (link.style.color = 'var(--navbar-text-color)'));
	  icons.forEach(icon => (icon.style.color = 'var(--navbar-text-color)')); 
	}
  });
  