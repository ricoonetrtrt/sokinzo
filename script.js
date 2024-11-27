// تحديث الشاشة بإضافة القيمة
function appendValue(value) {
  const display = document.getElementById('display');
  display.value += value;
}

// مسح الشاشة بالكامل
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
    // استبدال الرموز × و ÷
    display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
  } catch (error) {
    display.value = 'خطأ'; // في حالة وجود خطأ
  }
}
