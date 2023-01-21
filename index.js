/*
1 meter = 3.281 feet
1 feet = 0.305 meter
1 liter = 0.264 gallon
1 gallon = 3.785 liter
1 kilogram = 2.204 pound
1 pound = 0.454 kg
*/

const ipNum = document.getElementById('numb')
const convertBtn = document.getElementById('convert')
const lenEle = document.getElementById('len-conv')
const volEle = document.getElementById('vol-conv')
const massEle = document.getElementById('mass-conv')

convertBtn.addEventListener('click', function() {
    let number = Number(ipNum.value)
    display_length(number)
    display_volume(number)
    display_mass(number)
})

function display_length(len) {
    let inMeter = (len*0.305).toFixed(3)
    let inFeet = (len*3.281).toFixed(3)
    let s = `${len} meters = ${inFeet} feet | ${len} feet = ${inMeter} meters`
    lenEle.textContent = s
}

function display_volume(vol) {
    let inLiter = (vol*3.785).toFixed(3)
    let inGallon = (vol*0.264).toFixed(3)
    let s = `${vol} liters = ${inGallon} gallon | ${vol} feet = ${inLiter} liters`
    volEle.textContent = s
}

function display_mass(mass) {
    let inKilo = (mass*0.454).toFixed(3)
    let inPound = (mass*2.204).toFixed(3)
    let s = `${mass} kilos = ${inPound} pounds | ${mass} pounds = ${inKilo} kilos`
    massEle.textContent = s
}