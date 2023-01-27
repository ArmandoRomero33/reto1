function distributeGifts(packOfGifts, reindeers){
    function totalWeightSum(item) {
      return item.reduce((acc, current) => acc + current.length, 0)
    }
    const gitsWeight = totalWeightSum(packOfGifts)
    const reindeersWeight = totalWeightSum(reindeers) * 2
    return Math.floor(reindeersWeight / gitsWeight)
  }