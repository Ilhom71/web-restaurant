import { Component, signal, computed, AfterViewInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TRANSLATIONS, Lang } from './app.i18n';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {
  mobileOpen = signal(false);
  status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');
  lang = signal<Lang>('uz');
  t = computed(() => TRANSLATIONS[this.lang()]);

  form = { name: '', phone: '', email: '', subject: "Bepul demo olish", message: '' };

  private BOT_TOKEN = '8318871932:AAErwf_-4J1ZhUl3gTwPeGpj-h231CKElVk';
  private CHAT_ID   = '5705235263';

  private io?: IntersectionObserver;

  toggle()    { this.mobileOpen.update(v => !v); }
  closeMenu() { this.mobileOpen.set(false); }
  setLang(l: Lang) { this.lang.set(l); }

  go(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.closeMenu();
  }

  async send() {
    if (!this.form.name.trim() || !this.form.phone.trim()) return;
    this.status.set('sending');

    const text =
      `🏪 <b>Restoran ERP — Yangi Demo So'rovi</b>\n\n` +
      `👤 <b>Ism:</b> ${this.form.name}\n` +
      `📞 <b>Telefon:</b> ${this.form.phone}\n` +
      `🏠 <b>Restoran:</b> ${this.form.email || '—'}\n` +
      `📋 <b>Qiziqish:</b> ${this.form.subject}\n` +
      `💬 <b>Qo'shimcha:</b> ${this.form.message || '—'}`;

    try {
      const r = await fetch(
        `https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: this.CHAT_ID, text, parse_mode: 'HTML' })
        }
      );
      this.status.set(r.ok ? 'success' : 'error');
      if (r.ok) {
        this.form = { name: '', phone: '', email: '', subject: "Bepul demo olish", message: '' };
      }
    } catch {
      this.status.set('error');
    }
    setTimeout(() => this.status.set('idle'), 5000);
  }

  ngAfterViewInit() {
    this.io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in-view');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-anim]').forEach(el => this.io!.observe(el));
  }

  ngOnDestroy() { this.io?.disconnect(); }
}
