#[napi]
pub fn fibonacci(n: i64) -> i64 {
  if n <= 1 {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}
