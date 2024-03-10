/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {

 let p1 = m -1, p2 = n-1, index = m + n -1
 
 while (p1 >=0 && p2>=0){
     if(nums1[p1] > nums2[p2]){
         nums1[index] = nums1[p1]
         p1--
     }else { 
        nums1[index] = nums2[p2]
         p2--
     
     }
     index--
 }
    
    while(p2>=0) {
        nums1[index] = nums2[p2]
        index --
        p2--
    }
    
    
    
}