#![deny(clippy::all)]

#[napi]
pub fn quick_sort(mut arr: Vec<i64>) -> Vec<i64> {
  let right = (arr.len() - 1) as i64;
  _quick_sort(&mut arr, 0, right);

  return arr;
}

fn _quick_sort(arr: &mut Vec<i64>, left: i64, right: i64) {
  if left > right {
    return;
  }

  let pivot_idx = middle_element(arr, left, right);

  arr.swap(pivot_idx as usize, left as usize);

  let index = partition(arr, left, right); // элемент с pivot, слева все что меньше, справа все что больше

  _quick_sort(arr, left, index - 1);
  _quick_sort(arr, index + 1, right);
}

fn first_element(arr: &mut Vec<i64>, left: i64, right: i64) -> i64 {
  return left;
}

fn middle_element(arr: &mut Vec<i64>, left: i64, right: i64) -> i64 {
  return (left + right) / 2;
}

fn partition(arr: &mut Vec<i64>, left: i64, right: i64) -> i64 {
  let mut i = left + 1;

  for j in i..=right {
    if arr[j as usize] < arr[left as usize] {
      arr.swap(i as usize, j as usize);
      i += 1
    }
  }

  i -= 1;
  arr.swap(left as usize, i as usize);

  return i;
}
