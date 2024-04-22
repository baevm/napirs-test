#[napi]
pub fn merge_sort(arr: Vec<i32>) -> Vec<i32> {
  if arr.len() < 2 {
    return arr;
  }

  let mid = arr.len() / 2;
  let left = &arr[0..mid];
  let right = &arr[mid..];

  return merge(merge_sort(left.to_vec()), merge_sort(right.to_vec()));
}

fn merge(left_arr: Vec<i32>, right_arr: Vec<i32>) -> Vec<i32> {
  let mut res = vec![];

  let mut i = 0;
  let mut j = 0;

  while i < left_arr.len() && j < right_arr.len() {
    if left_arr[i] < right_arr[j] {
      res.push(left_arr[i]);
      i += 1;
    } else {
      res.push(right_arr[j]);
      j += 1;
    }
  }

  if i < left_arr.len() {
    res.extend_from_slice(&left_arr[i..]);
  }

  if j < right_arr.len() {
    res.extend_from_slice(&right_arr[j..]);
  }

  return res;
}
