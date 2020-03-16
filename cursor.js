var cursor = {
  delay: 8,
  _x: 0,
  _y: 0,
  endX: (window.innerWidth / 2),
  endY: (window.innerHeight / 2),
  cursorVisible: true,
  cursorEnlarged: false,
  $dot: document.querySelector('.cursor-dot'),
  $outline: document.querySelector('.cursor-dot-outline'),
  
  init: function() {
      // Set up element sizes
      this.dotSize = this.$dot.offsetWidth;
      this.outlineSize = this.$outline.offsetWidth;
      
      this.setupEventListeners();
      this.animateDotOutline();
  },
  setupEventListeners: function() {
      var self = this;
      
      // Anchor hovering

      document.querySelectorAll('.hover-project').forEach(function(el) {
        el.addEventListener('mouseover', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
            self.toggleWhiteBackground();
            self.setInnerText("READ MORE");
        });
        el.addEventListener('mouseout', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
            self.toggleWhiteBackground();
            self.setInnerText("");
        });
      });

      document.querySelectorAll('.hover-me').forEach(function(el) {
        el.addEventListener('mouseover', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
            self.toggleWhiteBackground();
            self.setInnerText("That's me!!!");
        });
        el.addEventListener('mouseout', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
            self.toggleWhiteBackground();
            self.setInnerText("");
        });
      });
      
      // Click events
      document.addEventListener('mousedown', function() {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
      });
      document.addEventListener('mouseup', function() {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
      });


      document.addEventListener('mousemove', function(e) {
          // Show the cursor
          self.cursorVisible = true;
          self.toggleCursorVisibility();

          // Position the dot
          self.endX = e.pageX;
          self.endY = e.pageY;
          self.$dot.style.top = self.endY + 'px';
          self.$dot.style.left = self.endX + 'px';
      });
      
      // Hide/show cursor
      document.addEventListener('mouseenter', function(e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
      });
      
      document.addEventListener('mouseleave', function(e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
      });
  },
  
  animateDotOutline: function() {
      var self = this;
      
      self._x += (self.endX - self._x) / self.delay;
      self._y += (self.endY - self._y) / self.delay;
      self.$outline.style.top = self._y + 'px';
      self.$outline.style.left = self._x + 'px';
      
      requestAnimationFrame(this.animateDotOutline.bind(self));
  },
  
  toggleClickMe: function() {
    var self = this;

    if (self.cursorEnlarged) {
        self.$outline.innerHTML = 'CLICK <br> ME';
        self.$outline.style.background = 'blue';
    } else {
        self.$outline.innerHTML = '';
        self.$outline.style.background = 'rgba(0, 0, 255, 0.2)';
    }

  },

  toggleWhiteBackground: function() {
    var self = this;

    if (self.cursorEnlarged) {
        self.$outline.style.background = 'white';
        self.$outline.style.border = 'none';
        self.$outline.style.color = 'blue';
    } else {
        self.$outline.style.background = 'rgba(0, 0, 255, 0.2)';
        self.$outline.style.border ='border: 2px solid blue';
        self.$outline.style.color = 'white';
    }

  },

  setInnerText: function(text) {
    var self = this;

    if (self.cursorEnlarged) {
        self.$outline.innerHTML = text;
    } else {
        self.$outline.innerHTML = '';
    }

  },

  toggleCursorSize: function() {
      var self = this;
      
      if (self.cursorEnlarged) {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(0)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(3)';
      } else {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(1.2)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
      }
  },
  
  toggleCursorVisibility: function() {
      var self = this;
      
      if (self.cursorVisible) {
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
      } else {
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
      }
  }
}

cursor.init();