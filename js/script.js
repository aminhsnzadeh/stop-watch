let _watch = document.getElementById('stopwatch')
let hr = 0
let min = 0
let ss = 0
let ms = 0
let timer = true
let flag 

function _start() {
    if(timer == true) {
        timer = false
        _timing()
    }
}
function _stop() {
    if(timer == false) {
        timer = true
    }
}
function _timing(self) {
    if(timer == false) {
        ss = parseInt(ss)
        min = parseInt(min)
        hr = parseInt(hr)
        ms = ms + 1
        if(ms == 100) {
            ss = ss + 1
            ms = 0
        }
        if(ss == 60) {
            min = min + 1
            ss = 0
        }
        if(min == 60) {
            hr = hr + 1
            min = 0
            ss = 0
        }
        if(ss < 10 || ss == 0) {
            ss = '0' + ss
        }
        if(min < 10 || min == 0) {
            min = '0' + min
        }
        if(hr < 10 || hr == 0) {
            hr = '0' + hr
        }
        _watch.innerHTML ='<p>' + hr + ':' + min + ':' + ss + '"<span>' + ms + '</span></p>'
        setTimeout(_timing, 10)
    }
}
function _snaping() {
    let _snap = _watch.innerHTML
    document.getElementById('snapList').innerHTML += '<li class="list"><h2>'+ _snap +'</h2><span onclick="_closing(this)" class="bi-x-circle"></span></li>'
}   
function _resetSnap() {
    document.getElementById('snapList').innerHTML = ''
}
function _closing(self) {
    self.parentElement.remove()
}
function _reset() {
    _watch.innerHTML = '<p>00:00:00"<span>00</span></p>'
    _timer = true
    ms = 0
    ss = 0
    min = 0
    hr = 0
}