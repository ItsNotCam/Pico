import $ from 'jquery';
import './util';
import { redirect } from './util';

$(".sitemap ul li").each(function() {
  $(this).on("click", function() { 
    redirect($(this)); 
  })
});