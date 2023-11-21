process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const userinput = process.stdin.read();

  if (userinput) {
    process.stdout.write(`Your name is: ${userinput}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
