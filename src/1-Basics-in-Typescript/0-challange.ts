type TODO = 'back' | 'ahead';

export function navigate(direction: TODO) {
  return direction;
}

// ✅
navigate('back');

// ✅
navigate('ahead');

// ❌
navigate('left');

// ❌
navigate('right');
