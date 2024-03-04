/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    // nums1 = [0], m=1, nums2 = [1], n=1
    
    let firstPointer = m-1, secondPointer = n-1, reverseIndex = m+n-1
    
    while (firstPointer >= 0 && secondPointer >=0){
        if(nums1[firstPointer] > nums2[secondPointer]){
            nums1[reverseIndex] = nums1[firstPointer]
            firstPointer--;
        }else{
            nums1[reverseIndex] = nums2[secondPointer]
            secondPointer--;
        }
        reverseIndex--;
    }
    
    while(secondPointer >=0){
        nums1[reverseIndex] = nums2[secondPointer]
        secondPointer--;
        reverseIndex--;
    }
    
    
    

}