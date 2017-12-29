function simpleTimeout(consoleTimer)
{
	console.timeEnd(consoleTimer);
}

console.time("two second");
simpleTimeout(simpleTimeout,2000,"twoSecond");

console.time("one second");
simpleTimeout(simpleTimeout,1000,"oneSecond");

console.time("five second");
simpleTimeout(simpleTimeout,5000,"fiveSecond");

console.time("fifty milli second");
simpleTimeout(simpleTimeout,50,"fiftyMillySecond");
