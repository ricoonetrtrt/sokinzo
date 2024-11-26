// تحديث الشاشة
function appendValue(value) {
  const display = document.getElementById('display');
  display.value += value;
}

// مسح الشاشة
function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}

// حذف آخر مدخل
function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

// حساب النتيجة
function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
  } catch {
    display.value = 'خطأ';
  }
}
