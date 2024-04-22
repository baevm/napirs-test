#![deny(clippy::all)]
pub mod fibo;
pub mod merge_sort;
pub mod quick_sort;

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn sum(a: i32, b: i32) -> i32 {
  a + b
}

#[napi]
pub fn native_sort(mut arr: Vec<i64>) -> Vec<i64> {
  arr.sort();
  return arr;
}

#[napi]
pub fn bubble_sort(mut arr: Vec<i64>) -> Vec<i64> {
  for i in 0..arr.len() {
    for j in i + 1..arr.len() {
      if arr[i] > arr[j] {
        arr.swap(i, j);
      }
    }
  }

  return arr;
}
