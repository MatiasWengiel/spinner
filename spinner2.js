const spinner = () => {
  let positions = ['\r| ', '\r/ ', '\r- ', '\r\\ ', '\r| ', '\r/ ', '\r- ', '\r\\ ']

  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      process.stdout.write(positions[i]);
    }, 100 + i * 200)
  }
}

spinner();