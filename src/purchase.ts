import $ from 'jquery';
import { registerMutualExclusions } from './util';

const opt1 = $("#pb-opt-list-model > div");
opt1.each(function() { 
  $(this).on("click", function() {
    opt1.each(function() { $(this).attr("data-selected", "false") })
    $(this).attr("data-selected", "true");
  })
})

const opt2 = $("#pb-opt-list-color > div");
opt2.each(function() { 
  $(this).on("click", function() {
    opt2.each(function() { $(this).attr("data-selected", "false") })
    $(this).attr("data-selected", "true");
  })
})

const opt3 = $("#pb-opt-list-storage > div");
opt3.each(function() { 
  $(this).on("click", function() {
    opt3.each(function() { $(this).attr("data-selected", "false") })
    $(this).attr("data-selected", "true");
  })
})

