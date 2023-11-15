  function maximumCount(nums: number[]): number {
    let negLeft = 0
    let negRight = nums.length-1
    let negCount = 0
    while(negLeft <= negRight){
        const mid = Math.floor((negLeft+negRight)/2)
        if(nums[mid]===0){
            negRight = negRight-1
        }else if(nums[mid]<0){
            negCount +=1
            negLeft = negLeft +1
        }else if(nums[mid]>0){
            negRight = negRight -1
        }
    }
      
    let posLeft = 0
    let posRight = nums.length-1
    let posCount = 0
    while(posLeft <= posRight){
        const mid = Math.floor((posLeft+posRight)/2)
        if(nums[mid]===0){
            posLeft = posLeft+1
        }else if(nums[mid]<0){
            posLeft = posLeft +1
        }else if(nums[mid]>0){
            posCount+=1
            posRight = posRight -1
        }
    }
    return Math.max(posCount, negCount)
};
