import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, CheckCircle2, Lock, Eye, EyeOff } from "lucide-react";
const STORAGE_KEY = "financial-autopilot-v2";

function IconBase({ children, className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

function HomeIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M5.5 15.2L16 6.2l10.5 9" />
      <path d="M8.5 13.5V25a1.4 1.4 0 0 0 1.4 1.4h4.2v-6.1a1.4 1.4 0 0 1 1.4-1.4h1a1.4 1.4 0 0 1 1.4 1.4v6.1h4.2a1.4 1.4 0 0 0 1.4-1.4V13.5" />
    </IconBase>
  );
}

function AdvanceIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M16 5.2C10.2 5.2 6 10 6 16s4.2 10.8 10 10.8"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <path
        d="M16 5.2c-1.5 1.6 1.1 3.2 0 4.8-1.1 1.6 1.1 3.2 0 4.8-1.1 1.6 1.1 3.2 0 4.8-1.1 1.6 1.1 3.2 0 7.2"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <path
        d="M17 5.2c5.2.5 9 5 9 10.8s-3.8 10.3-9 10.8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeDasharray="3.2 3.2"
      />

      <text
        x="10.1"
        y="19.3"
        fontSize="9"
        fontWeight="600"
        fill="currentColor"
        stroke="none"
        fontFamily="Arial, sans-serif"
      >
        ₽
      </text>
    </svg>
  );
}

function SalaryIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M15 5.2c-5.2.5-9 5-9 10.8s3.8 10.3 9 10.8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeDasharray="3.2 3.2"
      />

      <path
        d="M16 5.2c1.5 1.6-1.1 3.2 0 4.8 1.1 1.6-1.1 3.2 0 4.8 1.1 1.6-1.1 3.2 0 4.8 1.1 1.6-1.1 3.2 0 7.2"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <path
        d="M16 5.2c5.8 0 10 4.8 10 10.8s-4.2 10.8-10 10.8"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      <text
        x="17.3"
        y="19.3"
        fontSize="9"
        fontWeight="600"
        fill="currentColor"
        stroke="none"
        fontFamily="Arial, sans-serif"
      >
        ₽
      </text>
    </svg>
  );
}

function ExpensesIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M10 5.5h12a1.6 1.6 0 0 1 1.6 1.6v19.4l-2.6-2-2.5 2-2.5-2-2.5 2-2.5-2-2.6 2V7.1A1.6 1.6 0 0 1 10 5.5Z" />
      <path d="M13 12h6" />
      <path d="M13 17h6" />
    </IconBase>
  );
}

function SubscriptionsIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <rect x="6.2" y="7.2" width="19.6" height="18.6" rx="2.6" />
      <path d="M10.5 4.8v5" />
      <path d="M21.5 4.8v5" />
      <path d="M6.2 12.4h19.6" />

      <path d="M12.4 18.2a4.2 4.2 0 0 1 7-1.4" />
      <path d="M19.4 16.8v-2.4h2.4" />

      <path d="M19.6 19.8a4.2 4.2 0 0 1-7 1.4" />
      <path d="M12.6 21.2v2.4h-2.4" />
    </IconBase>
  );
}

function SettingsIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 4.8l.8 3a8.8 8.8 0 0 1 2.1.9l2.8-1.5 1.8 1.8-1.5 2.8c.4.7.7 1.4.9 2.1l3 .8v2.6l-3 .8a8.8 8.8 0 0 1-.9 2.1l1.5 2.8-1.8 1.8-2.8-1.5a8.8 8.8 0 0 1-2.1.9l-.8 3h-3.4l-.8-3a8.8 8.8 0 0 1-2.1-.9l-2.8 1.5-1.8-1.8 1.5-2.8a8.8 8.8 0 0 1-.9-2.1l-3-.8v-2.6l3-.8c.2-.7.5-1.4.9-2.1L6.8 9l1.8-1.8 2.8 1.5c.7-.4 1.4-.7 2.1-.9l.8-3h3.4Z" />
      <circle cx="16" cy="16" r="4.1" />
    </svg>
  );
}

function Button({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "default",
  disabled = false,
  type = "button",
}) {
  const base =
    "inline-flex items-center justify-center font-medium transition active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-slate-950 text-white hover:bg-slate-800",
    secondary: "bg-white text-slate-950 border border-slate-200 hover:bg-slate-50",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    default: "px-4 py-2",
    sm: "px-3 py-2 text-sm",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}`}
    >
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`border border-slate-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

const money = (n) =>
  new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(Math.round(Number(n || 0))) + " ₽";

const emptyState = {
  configured: false,
  pin: "",
  salary: 0,
  manualIncome: false,
  advancePercent: 40,
  salaryPercent: 60,
  advanceAmount: 0,
  salaryAmount: 0,
  advanceDay: 25,
  salaryDay: 13,
  pocketPercent: 10,
  pocketCurrent: 0,
  motherPercent: 10,
  savingsPercent: 35,
  savingsMode: "buffer", // buffer | distributed
  bufferGoal: 300000,
  bufferFact: 0,
  pulseMonths: 4,
  postBufferMonths: 1,
  investmentFact: 0,
  longTermFact: 0,
  longTermYearGoal: 144000,
  longTermPaidThisYear: 0,
  hideAmounts: false,
  expenses: [],
  subscriptions: [],
};

function safeId() {
  return typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random());
}

function toInputValue(value) {
  return value === 0 || value === "0" || value === null || value === undefined ? "" : value;
}

function parseDigits(raw) {
  const cleaned = String(raw).replace(/[^0-9]/g, "");
  return cleaned === "" ? "" : Number(cleaned);
}

function useLocalState() {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...emptyState, ...JSON.parse(saved) } : emptyState;
    } catch {
      return emptyState;
    }
  });

  const update = (patch) => {
    setState((prev) => {
      const next = { ...prev, ...patch };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setState(emptyState);
  };

  return [state, update, reset];
}

function amountVisible(state, value) {
  return state.hideAmounts ? "•••••" : money(value);
}


function accountDisplayName(account) {
  if (account === "ЕДА" || account === "Яндекс") return "Яндекс";
  return account || "Оплатить сразу";
}

function monthlySubscriptionAmount(subscription) {
  return Number(subscription.price || 0) / Math.max(1, Number(subscription.periodMonths || 1));
}

function isBufferReady(state) {
  const goal = Number(state.bufferGoal || 0);
  const fact = Number(state.bufferFact || 0);
  return goal > 0 && fact >= goal;
}

function bufferStatusText(state) {
  return isBufferReady(state) ? "Подушка собрана" : "Собираю подушку";
}

function calcPlan(s) {
  const advance = s.manualIncome ? Number(s.advanceAmount) : Number(s.salary) * Number(s.advancePercent) / 100;
  const salaryPart = s.manualIncome ? Number(s.salaryAmount) : Number(s.salary) * Number(s.salaryPercent) / 100;
  const pocketLimit = Number(s.salary) * Number(s.pocketPercent) / 100;
  const pocketTopUp = Math.max(0, pocketLimit - Number(s.pocketCurrent || 0));
  const monthlySavings = Number(s.salary) * Number(s.savingsPercent) / 100;
  const monthsLeft = Math.max(1, 12 - new Date().getMonth());
  const longTermCurrent = Number((s.longTermFact ?? s.longTermPaidThisYear) || 0);
  const longTermMonthly = Math.max(0, (Number(s.longTermYearGoal) - longTermCurrent) / monthsLeft);
  const bufferReady = isBufferReady(s);

  const activeExpenses = s.expenses.filter((e) => e.active);
  const byTrigger = (trigger) => activeExpenses.filter((e) => e.trigger === trigger || e.trigger === "both");
  const amountForTrigger = (e) => {
    if (e.type === "percentSalary") return Number(s.salary) * Number(e.amount || 0) / 100;
    if (e.trigger === "both" || e.type === "split") return Number(e.amount || 0) / 2;
    return Number(e.amount || 0);
  };

  const build = (trigger, income) => {
    const items = [];
    let used = 0;
    const grouped = new Map();

    byTrigger(trigger).forEach((e) => {
      const amount = amountForTrigger(e);
      const key = e.account || "Оплатить сразу";
      if (!grouped.has(key)) grouped.set(key, { account: key, amount: 0, details: [] });
      grouped.get(key).amount += amount;
      grouped.get(key).details.push({ name: e.name, amount });
    });

    Array.from(grouped.values()).forEach((g) => {
      const displayAccount = accountDisplayName(g.account);
      items.push({
        title: displayAccount === "Оплатить сразу" ? "Оплатить сразу" : `Перевести в ${displayAccount}`,
        amount: g.amount,
        note: g.details.map((d) => `${d.name} — ${money(d.amount)}`).join("\\n"),
      });
      used += g.amount;
    });

    const triggerSubscriptions = s.subscriptions.filter(
      (x) => x.active && (x.trigger || "advance") === trigger
    );
    const subReserve = triggerSubscriptions.reduce((sum, x) => sum + monthlySubscriptionAmount(x), 0);
    if (subReserve > 0) {
      items.push({
        title: "Перевести в Подписки",
        amount: subReserve,
        note: triggerSubscriptions
          .map((x) => `${x.name} — ${money(monthlySubscriptionAmount(x))}`)
          .join("\\n"),
      });
      used += subReserve;
    }

    if (trigger === "advance") {
      items.push({ title: "Пополнить Карманные", amount: pocketTopUp, note: `Лимит ${money(pocketLimit)}, сейчас ${money(s.pocketCurrent)}` });
      used += pocketTopUp;
    }

    if (trigger === "salary") {
      if (!bufferReady) {
        items.push({ title: "Перевести в Накопления", amount: monthlySavings, note: `Минимум ${s.savingsPercent}% от зарплаты` });
        used += monthlySavings;
      } else {
        const toLong = Math.min(monthlySavings, longTermMonthly);
        const toInvest = Math.max(0, monthlySavings - toLong);
        items.push({ title: "Перевести в Долгосрок", amount: toLong, note: `Цель ${money(s.longTermYearGoal)} в год` });
        items.push({ title: "Перевести в Инвест-накопления", amount: toInvest, note: "Остаток от обязательных накоплений" });
        used += toLong + toInvest;
      }
    }

const distributed = used;
const rest = Math.max(0, income - distributed);
const deficit = Math.max(0, distributed - income);

if (rest > 0) {
  const target =
    bufferReady && trigger === "salary"
      ? "Инвест-накопления"
      : "Накопления";

  items.push({
    title: `Остаток в ${target}`,
    amount: rest,
    note: "Свободный остаток после всех переводов",
  });
}

return {
  income,
  distributed,
  rest,
  deficit,
  totalWithRest: distributed + rest,
  items,
};
  };

  const advancePlan = build("advance", advance);
  const salaryPlan = build("salary", salaryPart);

  const totalFree = advancePlan.rest + salaryPlan.rest;
  const totalDeficit = advancePlan.deficit + salaryPlan.deficit;
  const netFree = totalFree - totalDeficit;

  return {
    advance,
    salaryPart,
    pocketLimit,
    monthlySavings,
    advancePlan,
    salaryPlan,
    totalFree,
    totalDeficit,
    netFree,
    bufferReady,
  };
}

function Field({ label, value, onChange, type = "number", suffix, placeholder }) {
  const isNumber = type === "number";
  const displayValue = isNumber ? toInputValue(value) : value;

  return (
    <label className="block space-y-1">
      <span className="text-sm text-slate-600">{label}</span>
      <div className="flex items-center rounded-xl border bg-white px-3 py-2">
        <input
          type={isNumber ? "text" : type}
          inputMode={isNumber ? "numeric" : undefined}
          value={displayValue}
          placeholder={placeholder || (isNumber ? "0" : undefined)}
          onChange={(e) => onChange(isNumber ? parseDigits(e.target.value) : e.target.value)}
          className="w-full bg-transparent outline-none placeholder:text-slate-300"
        />
        {suffix && <span className="text-slate-400">{suffix}</span>}
      </div>
    </label>
  );
}

function NumericInput({ value, onChange, className = "", placeholder = "0" }) {
  return (
    <input
      type="text"
      inputMode="numeric"
      value={toInputValue(value)}
      placeholder={placeholder}
      onChange={(e) => onChange(parseDigits(e.target.value))}
      className={className + " placeholder:text-slate-300"}
    />
  );
}

function BufferProgress({ state }) {
  const goal = Number(state.bufferGoal || 0);
  const fact = Number(state.bufferFact || 0);
  const percent = goal > 0 ? Math.min(100, Math.max(0, (fact / goal) * 100)) : 0;
  const missing = Math.max(0, goal - fact);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-slate-500">Подушка</span>
        <b>{amountVisible(state, fact)} / {amountVisible(state, goal)}</b>
      </div>

      <div className="h-3 overflow-hidden rounded-full border-2 border-slate-950 bg-white">
        <div
          className="h-full rounded-full bg-slate-950 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="text-xs text-slate-400">
        {missing > 0 ? `Не хватает: ${amountVisible(state, missing)}` : "План выполнен"}
      </div>
    </div>
  );
}

function PulseColumn({ title, value, colorClass, state, maxUp, maxDown, signed = false }) {
  const numberValue = Number(value || 0);
  const positive = Math.max(0, numberValue);
  const negative = Math.max(0, -numberValue);
  const upHeight = maxUp > 0 ? Math.max(8, (positive / maxUp) * 150) : 8;
  const downHeight = maxDown > 0 ? Math.max(8, (negative / maxDown) * 70) : 8;

  return (
    <div className="min-w-0">
      <div className="mb-2 text-center text-xs font-semibold text-slate-500">{title}</div>
      <div className="flex h-60 flex-col">
        <div className="flex h-[160px] items-end justify-center">
          {positive > 0 ? (
            <div
              className={`w-14 rounded-t-2xl ${colorClass}`}
              style={{ height: `${upHeight}px` }}
            />
          ) : (
            <div className="h-2 w-14 rounded-t-2xl bg-slate-200" />
          )}
        </div>

        <div className="h-px bg-slate-300" />

        <div className="flex h-[80px] items-start justify-center">
          {signed && negative > 0 ? (
            <div
              className="w-14 rounded-b-2xl bg-red-500"
              style={{ height: `${downHeight}px` }}
            />
          ) : null}
        </div>
      </div>
      <div className={`text-center text-sm font-bold ${signed && numberValue < 0 ? "text-red-600" : "text-slate-950"}`}>
        {signed && numberValue < 0 ? `-${amountVisible(state, Math.abs(numberValue))}` : amountVisible(state, numberValue)}
      </div>
    </div>
  );
}

function PulseMetric({ label, value, state, tone = "dark" }) {
  const toneClass = tone === "green" ? "text-emerald-700" : tone === "red" ? "text-red-600" : "text-slate-950";
  return (
    <div className="rounded-2xl bg-slate-100 p-3">
      <div className="text-xs font-medium text-slate-500">{label}</div>
      <div className={`mt-1 text-lg font-bold ${toneClass}`}>{amountVisible(state, value)}</div>
    </div>
  );
}

function PulseProgress({ title, fact, target, state, hint }) {
  const factValue = Number(fact || 0);
  const targetValue = Number(target || 0);
  const percent = targetValue > 0 ? Math.min(100, Math.max(0, (factValue / targetValue) * 100)) : 0;
  const delta = factValue - targetValue;
  const isDeficit = delta < 0;

  return (
    <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-semibold">{title}</div>
          {hint && <div className="text-xs text-slate-500">{hint}</div>}
        </div>
        <div className="text-right text-sm font-semibold">
          {amountVisible(state, factValue)} / {amountVisible(state, targetValue)}
        </div>
      </div>

      <div className="h-3 overflow-hidden rounded-full border-2 border-slate-950 bg-white">
        <div className="h-full rounded-full bg-slate-950 transition-all" style={{ width: `${percent}%` }} />
      </div>

      <div className={`text-xs font-semibold ${isDeficit ? "text-red-600" : "text-emerald-700"}`}>
        {isDeficit
          ? `Не хватает: ${amountVisible(state, Math.abs(delta))}`
          : `Сверх плана: ${amountVisible(state, delta)}`}
      </div>
    </div>
  );
}

function PulsePage({ state, update, plan, onBack }) {
  const months = Math.max(1, Number(state.pulseMonths || 1));
  const postBufferMonths = Math.max(1, Number(state.postBufferMonths || 1));
  const bufferGoal = Number(state.bufferGoal || 0);
  const bufferFact = Number(state.bufferFact || 0);
  const investmentFact = Number(state.investmentFact || 0);
  const longTermFact = Number(state.longTermFact || 0);
  const assetsTotal = bufferFact + investmentFact + longTermFact;
  const bufferReady = isBufferReady(state);
  const safeReserve = bufferFact - bufferGoal;

  const hardTarget = Number(plan.monthlySavings || 0) * months;
  const softSavings = bufferFact - hardTarget;

  const longTermYearGoal = Number(state.longTermYearGoal || 0);
  const longTermMonthlyPlan = longTermYearGoal / 12;
  const longTermTarget = longTermMonthlyPlan * postBufferMonths;

  const investmentMonthlyPlan = Math.max(0, Number(plan.monthlySavings || 0) - longTermMonthlyPlan);
  const investmentTarget = investmentMonthlyPlan * postBufferMonths;

  const maxUp = Math.max(bufferFact, hardTarget, Math.max(softSavings, 0), 1);
  const maxDown = Math.max(Math.abs(Math.min(softSavings, 0)), 1);

  return (
    <div className="space-y-4">
      <div>
        <button onClick={onBack} className="mb-3 text-sm font-semibold text-slate-500">← Главная</button>
        <h2 className="text-2xl font-semibold">Пульс</h2>
        <p className="text-slate-500">Автоматический статус подушки и контроль накоплений.</p>
      </div>

      <div className="rounded-2xl bg-slate-950 p-4 text-white shadow-sm">
        <div className="text-sm text-slate-300">Всего в накопительном контуре</div>
        <div className="mt-1 text-3xl font-bold">{amountVisible(state, assetsTotal)}</div>
        <div className="mt-2 text-xs text-slate-400">Подушка + Инвестиции + Долгосрок</div>
      </div>

      <Card className="rounded-2xl">
        <CardContent className="space-y-3 p-4">
          {!bufferReady && (
            <Field label="Количество месяцев" value={state.pulseMonths} onChange={(v) => update({ pulseMonths: v })} />
          )}

          <div className="grid grid-cols-2 gap-3">
            <Field label="План подушки" value={state.bufferGoal} onChange={(v) => update({ bufferGoal: v })} />
            <Field label="Факт подушки" value={state.bufferFact} onChange={(v) => update({ bufferFact: v })} />
          </div>

          <div className={`rounded-2xl p-3 ${bufferReady ? "bg-emerald-50" : "bg-slate-100"}`}>
            <div className="text-xs font-medium text-slate-500">Статус</div>
            <div className={`mt-1 text-lg font-bold ${bufferReady ? "text-emerald-700" : "text-slate-950"}`}>
              {bufferStatusText(state)}
            </div>
          </div>
        </CardContent>
      </Card>

      {!bufferReady ? (
        <Card className="rounded-2xl">
          <CardContent className="space-y-4 p-4">
            <div className="grid grid-cols-3 gap-2">
              <PulseColumn title="Факт" value={bufferFact} colorClass="bg-slate-950" state={state} maxUp={maxUp} maxDown={maxDown} />
              <PulseColumn title="Жёсткий план" value={hardTarget} colorClass="bg-slate-700" state={state} maxUp={maxUp} maxDown={maxDown} />
              <PulseColumn title="Мягкий накоп" value={softSavings} colorClass="bg-emerald-600" state={state} maxUp={maxUp} maxDown={maxDown} signed />
            </div>

            <div className="rounded-2xl bg-slate-100 p-3 text-sm text-slate-600">
              Пока подушка не собрана, Пульс сравнивает факт подушки с жёстким планом: 35% от ЗП × количество месяцев. Мягкий накоп показывает, идёшь ли ты выше или ниже обязательного накопа.
            </div>

            <BufferProgress state={state} />
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          <Card className="rounded-2xl">
            <CardContent className="space-y-3 p-4">
              <PulseMetric
                label="Можно взять без ущерба"
                value={Math.max(0, safeReserve)}
                state={state}
                tone="green"
              />

              <div className="rounded-2xl bg-slate-100 p-3 text-sm text-slate-600">
                Когда подушка собрана, главный показатель — сколько можно взять на аптеку, стрижку, одежду и разовые траты без ущерба базе подушки. Формула: факт подушки − план подушки.
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="space-y-4 p-4">
              <h3 className="text-lg font-semibold">Данные для инвестиций и долгосрока</h3>

              <Field
                label="Месяцев после сбора подушки"
                value={state.postBufferMonths}
                onChange={(v) => update({ postBufferMonths: v })}
              />

              <div className="grid grid-cols-2 gap-3">
                <Field label="Факт инвестиций" value={state.investmentFact} onChange={(v) => update({ investmentFact: v })} />
                <Field label="Факт долгосрока" value={state.longTermFact} onChange={(v) => update({ longTermFact: v, longTermPaidThisYear: v })} />
              </div>

              <Field label="Цель долгосрока в год" value={state.longTermYearGoal} onChange={(v) => update({ longTermYearGoal: v })} />

              <div className="rounded-2xl bg-slate-100 p-3 text-sm text-slate-600">
                Инвестиции и долгосрок считаются только с момента, когда подушка уже собрана. Например, если подушка собрана на 6-й месяц, здесь укажи 1 месяц.
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="space-y-4 p-4">
              <h3 className="text-lg font-semibold">Графики после сбора подушки</h3>

              <PulseProgress
                title="Подушка"
                fact={bufferFact}
                target={bufferGoal}
                state={state}
                hint="База безопасности. Всё выше плана — доступный резерв."
              />

              <PulseProgress
                title="Инвестиции"
                fact={investmentFact}
                target={investmentTarget}
                state={state}
                hint={`План: ${amountVisible(state, investmentMonthlyPlan)} в месяц × ${postBufferMonths}`}
              />

              <PulseProgress
                title="Долгосрок"
                fact={longTermFact}
                target={longTermTarget}
                state={state}
                hint={`План: ${amountVisible(state, longTermMonthlyPlan)} в месяц × ${postBufferMonths}`}
              />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

function NoteText({ text }) {
  return (
    <div className="space-y-0.5 text-sm text-slate-500">
      {String(text || "").split("\\n").map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
}

function LockScreen({ state, update, onUnlock }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (pin === state.pin) onUnlock();
    else setError("Неверный PIN");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <Card className="w-full max-w-sm rounded-3xl">
        <CardContent className="space-y-4 p-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white"><Lock /></div>
          <h1 className="text-2xl font-bold">Финансовый автопилот</h1>
          <p className="text-sm text-slate-500">Введите PIN для доступа к данным на этом устройстве.</p>
          <input
            type="password"
            inputMode="numeric"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            className="w-full rounded-2xl border px-4 py-3 text-center text-xl outline-none"
            placeholder="PIN"
          />
          {error && <div className="text-sm text-red-500">{error}</div>}
          <Button onClick={submit} className="h-12 w-full rounded-2xl">Открыть</Button>
          <button onClick={() => update({ hideAmounts: true })} className="text-xs text-slate-400">PIN защищает от случайного просмотра. Для сильной защиты нужен следующий этап: шифрование.</button>
        </CardContent>
      </Card>
    </div>
  );
}

function Setup({ update }) {
  const [draft, setDraft] = useState({ ...emptyState, salary: "", pin: "" });
  const patch = (p) => setDraft((d) => ({ ...d, ...p }));

  const finish = () => {
    const salary = Number(draft.salary || 0);
    const advanceAmount = draft.manualIncome ? Number(draft.advanceAmount || 0) : salary * Number(draft.advancePercent || 40) / 100;
    const salaryAmount = draft.manualIncome ? Number(draft.salaryAmount || 0) : salary * Number(draft.salaryPercent || 60) / 100;

    update({
      ...draft,
      configured: true,
      salary,
      advanceAmount,
      salaryAmount,
      expenses: [
        { id: safeId(), name: "Матушке", amount: Number(draft.motherPercent || 10), account: "ЕПС", trigger: "salary", type: "percentSalary", active: true },
      ],
      subscriptions: [],
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6">
      <div className="mx-auto max-w-md space-y-4">
        <div>
          <h1 className="text-3xl font-bold">Первичная настройка</h1>
          <p className="text-slate-500">Данные сохранятся только в браузере этого устройства.</p>
        </div>
        <Card className="rounded-3xl"><CardContent className="space-y-4 p-5">
          <Field label="Зарплата в месяц" value={draft.salary} onChange={(v)=>patch({salary:v})} placeholder="Например 150000" />
          <div className="grid grid-cols-2 gap-3">
            <Field label="Аванс" value={draft.advancePercent} onChange={(v)=>patch({advancePercent:v, salaryPercent: 100 - v})} suffix="%" />
            <Field label="Зарплата" value={draft.salaryPercent} onChange={(v)=>patch({salaryPercent:v, advancePercent: 100 - v})} suffix="%" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="День аванса" value={draft.advanceDay} onChange={(v)=>patch({advanceDay:v})} />
            <Field label="День зарплаты" value={draft.salaryDay} onChange={(v)=>patch({salaryDay:v})} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Карманные" value={draft.pocketPercent} onChange={(v)=>patch({pocketPercent:v})} suffix="%" />
            <Field label="Матушке" value={draft.motherPercent} onChange={(v)=>patch({motherPercent:v})} suffix="%" />
          </div>
          <Field label="Накопления" value={draft.savingsPercent} onChange={(v)=>patch({savingsPercent:v})} suffix="%" />
          <Field label="PIN-код" value={draft.pin} type="password" onChange={(v)=>patch({pin:v})} placeholder="4–6 цифр" />
          <Button disabled={!draft.salary || !draft.pin} onClick={finish} className="h-12 w-full rounded-2xl">Создать автопилот</Button>
        </CardContent></Card>
      </div>
    </div>
  );
}

function TriggerSummary({ state, plan }) {
  const isDeficit = plan.deficit > 0;

  return (
    <Card className={`rounded-2xl ${isDeficit ? "border-red-200 bg-red-50" : "bg-white"}`}>
      <CardContent className="space-y-2 p-4">
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Поступило</span>
          <b>{amountVisible(state, plan.income)}</b>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Распределено</span>
          <b>{amountVisible(state, plan.distributed)}</b>
        </div>

        <div className="flex justify-between text-sm">
          <span className={isDeficit ? "text-red-600" : "text-slate-500"}>
            {isDeficit ? "Не хватает" : "Свободно"}
          </span>
          <b className={isDeficit ? "text-red-600" : "text-emerald-700"}>
            {amountVisible(state, isDeficit ? plan.deficit : plan.rest)}
          </b>
        </div>
      </CardContent>
    </Card>
  );
}

function Checklist({ state, plan, title, date }) {
  const [done, setDone] = useState({});
  const selectedTotal = plan.items.reduce(
    (sum, it, idx) => sum + (done[idx] ? Number(it.amount || 0) : 0),
    0
  );

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-slate-500">
          Средняя дата: {date} число. Поступило: {amountVisible(state, plan.income)}
        </p>
      </div>

      <TriggerSummary state={state} plan={plan} />

      <div className="space-y-3">
        {plan.items.map((it, idx) => (
          <Card key={idx} className="rounded-2xl">
            <CardContent className="flex gap-3 p-4">
              <button onClick={() => setDone({ ...done, [idx]: !done[idx] })} className="pt-1">
                {done[idx] ? <CheckCircle2 className="h-6 w-6" /> : <div className="h-6 w-6 rounded-full border-2" />}
              </button>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className={done[idx] ? "line-through text-slate-400" : ""}>
                    <div className="font-medium">{it.title}</div>
                    <NoteText text={it.note} />
                  </div>

                  <div className="whitespace-nowrap text-lg font-semibold">
                    {amountVisible(state, it.amount)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="rounded-2xl bg-slate-950 text-white">
        <CardContent className="p-4">
          <div className="flex justify-between">
            <span>После распределения на Основной</span>
            <b>0 ₽</b>
          </div>
        </CardContent>
      </Card>

      {selectedTotal > 0 && (
        <div className="fixed inset-x-0 bottom-[112px] z-40 px-4">
          <div className="mx-auto flex max-w-md items-center justify-between rounded-2xl bg-slate-950 px-4 py-3 text-white shadow-lg">
            <span className="text-sm text-slate-300">Выбрано переводов</span>
            <b className="text-lg">{amountVisible(state, selectedTotal)}</b>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [state, update, reset] = useLocalState();
  const [locked, setLocked] = useState(Boolean(state.configured && state.pin));
  const [tab, setTab] = useState("home");
  const [confirmReset, setConfirmReset] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const plan = useMemo(() => calcPlan(state), [state]);

  const exportData = () => {
    const payload = {
      app: "financial-autopilot",
      version: 1,
      exportedAt: new Date().toISOString(),
      data: state,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `financial-autopilot-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const importData = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result || "{}"));
        const importedState = parsed.data || parsed;
        update({ ...emptyState, ...importedState, configured: true });
        alert("Данные импортированы");
      } catch (error) {
        alert("Не удалось импортировать файл. Проверь, что это JSON-резервная копия Финансового автопилота.");
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  };

  if (!state.configured) return <Setup update={update} />;
  if (locked) return <LockScreen state={state} update={update} onUnlock={() => setLocked(false)} />;

  const addExpense = () => update({
    expenses: [
      { id: safeId(), name: "Новая трата", amount: "", account: "Яндекс", trigger: "advance", type: "fixed", active: true },
      ...state.expenses,
    ],
  });
  const changeExpense = (id, patch) => update({ expenses: state.expenses.map(e => e.id === id ? { ...e, ...patch } : e) });
  const deleteExpense = (id) => update({ expenses: state.expenses.filter(e => e.id !== id) });
  const addSub = () => update({
    subscriptions: [
      { id: safeId(), name: "Новая подписка", price: "", periodMonths: 12, trigger: "advance", active: true },
      ...state.subscriptions,
    ],
  });
  const changeSub = (id, patch) => update({ subscriptions: state.subscriptions.map(x => x.id === id ? { ...x, ...patch } : x) });
  const deleteSub = (id) => update({ subscriptions: state.subscriptions.filter(x => x.id !== id) });

const NavButton = ({ id, icon: Icon, label }) => {
  const active = tab === id;

  return (
    <button
      onClick={() => setTab(id)}
      className={`flex h-[72px] min-w-0 flex-col items-center justify-center gap-1.5 rounded-2xl px-1 transition ${
        active
          ? "bg-slate-950 text-white shadow-md"
          : "text-slate-700 active:bg-slate-100"
      }`}
    >
      <Icon className="h-8 w-8 shrink-0" />

      <span className="w-full text-center text-[10px] font-semibold leading-tight tracking-tight">
        {label}
      </span>
    </button>
  );
};

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <div className="mx-auto max-w-md px-4 pb-28 pt-5"><motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="space-y-4">
{tab === "home" && (
  <div className="space-y-4">
    <div className="flex items-start justify-between gap-3">
      <div>
        <h1 className="text-3xl font-bold">Финансовый автопилот</h1>
        <p className="text-slate-500">
          Настроил правила → пришли деньги → сделал переводы.
        </p>
      </div>

      <button
        onClick={() => update({ hideAmounts: !state.hideAmounts })}
        className="rounded-2xl bg-white p-3"
      >
        {state.hideAmounts ? <Eye /> : <EyeOff />}
      </button>
    </div>

    <div className="grid grid-cols-2 gap-3">
      <Card className="rounded-2xl">
        <CardContent className="space-y-1 p-4">
          <div className="text-sm text-slate-500">Аванс</div>
          <div className="text-2xl font-bold">
            {amountVisible(state, plan.advance)}
          </div>
          <div className="text-sm">{state.advanceDay} число</div>

          <div
            className={`pt-2 text-xs font-semibold ${
              plan.advancePlan.deficit > 0
                ? "text-red-600"
                : "text-emerald-700"
            }`}
          >
            {plan.advancePlan.deficit > 0
              ? `Не хватает: ${amountVisible(state, plan.advancePlan.deficit)}`
              : `Свободно: ${amountVisible(state, plan.advancePlan.rest)}`}
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl">
        <CardContent className="space-y-1 p-4">
          <div className="text-sm text-slate-500">Зарплата</div>
          <div className="text-2xl font-bold">
            {amountVisible(state, plan.salaryPart)}
          </div>
          <div className="text-sm">{state.salaryDay} число</div>

          <div
            className={`pt-2 text-xs font-semibold ${
              plan.salaryPlan.deficit > 0
                ? "text-red-600"
                : "text-emerald-700"
            }`}
          >
            {plan.salaryPlan.deficit > 0
              ? `Не хватает: ${amountVisible(state, plan.salaryPlan.deficit)}`
              : `Свободно: ${amountVisible(state, plan.salaryPlan.rest)}`}
          </div>
        </CardContent>
      </Card>
    </div>

    <Button
      onClick={() => setTab("advance")}
      className="h-16 w-full rounded-2xl text-lg"
    >
      Пришёл аванс
    </Button>

    <Button
      onClick={() => setTab("salary")}
      variant="secondary"
      className="h-16 w-full rounded-2xl text-lg"
    >
      Пришла зарплата
    </Button>

    <Card className="rounded-2xl">
      <CardContent className="space-y-3 p-4">
        <div className="flex justify-between">
          <span>Минимум накоплений</span>
          <b>{amountVisible(state, plan.monthlySavings)}</b>
        </div>

        <div className="flex justify-between">
          <span>Лимит карманных</span>
          <b>{amountVisible(state, plan.pocketLimit)}</b>
        </div>

        <div className="flex justify-between">
          <span>Свободно</span>
          <b className={plan.netFree >= 0 ? "text-emerald-700" : "text-red-600"}>
            {plan.netFree >= 0
              ? amountVisible(state, plan.netFree)
              : `-${amountVisible(state, Math.abs(plan.netFree))}`}
          </b>
        </div>

        <div className="flex justify-between">
          <span>Режим</span>
          <b>
            {bufferStatusText(state)}
          </b>
        </div>

        <BufferProgress state={state} />
      </CardContent>
    </Card>

    <Button
      onClick={() => setTab("pulse")}
      variant="secondary"
      className="h-12 w-full rounded-2xl text-base"
    >
      Открыть Пульс
    </Button>
  </div>
)}

        {tab === "advance" && <Checklist state={state} plan={plan.advancePlan} title="Памятка: аванс" date={state.advanceDay} />}
        {tab === "salary" && <Checklist state={state} plan={plan.salaryPlan} title="Памятка: зарплата" date={state.salaryDay} />}
        {tab === "pulse" && <PulsePage state={state} update={update} plan={plan} onBack={() => setTab("home")} />}

        {tab === "settings" && <div className="space-y-4"><h2 className="text-2xl font-semibold">Настройки</h2><Card className="rounded-2xl"><CardContent className="space-y-3 p-4">
          <Field label="Зарплата в месяц" value={state.salary} onChange={(v)=>update({salary:v})} />
          <div className="grid grid-cols-2 gap-3"><Field label="Аванс" value={state.advancePercent} onChange={(v)=>update({advancePercent:v, salaryPercent: 100 - v})} suffix="%"/><Field label="Зарплата" value={state.salaryPercent} onChange={(v)=>update({salaryPercent:v, advancePercent: 100 - v})} suffix="%"/></div>
          <div className="grid grid-cols-2 gap-3"><Field label="День аванса" value={state.advanceDay} onChange={(v)=>update({advanceDay:v})}/><Field label="День зарплаты" value={state.salaryDay} onChange={(v)=>update({salaryDay:v})}/></div>
          <div className="grid grid-cols-2 gap-3"><Field label="Карманные" value={state.pocketPercent} onChange={(v)=>update({pocketPercent:v})} suffix="%"/><Field label="Матушке" value={state.motherPercent} onChange={(v)=>update({motherPercent:v, expenses: state.expenses.map(e => e.name === "Матушке" ? { ...e, amount: v, type: "percentSalary" } : e)})} suffix="%"/></div>
          <Field label="Накопления" value={state.savingsPercent} onChange={(v)=>update({savingsPercent:v})} suffix="%"/>
          <Field label="Сейчас на Карманных" value={state.pocketCurrent} onChange={(v)=>update({pocketCurrent:v})}/>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="secondary" onClick={exportData} className="w-full rounded-2xl">Экспорт</Button>
            <label className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2 font-medium text-slate-950 active:scale-[0.98]">
              Импорт
              <input type="file" accept="application/json,.json" onChange={importData} className="hidden" />
            </label>
          </div>
          <Button variant="secondary" onClick={() => setLocked(true)} className="w-full rounded-2xl">Заблокировать</Button>
          <Button variant="destructive" onClick={() => setConfirmReset(true)} className="w-full rounded-2xl">Стереть данные на этом устройстве</Button>
        </CardContent></Card></div>}

        {tab === "expenses" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Расходы</h2>
              <Button onClick={addExpense} size="sm" className="rounded-xl">
                <Plus className="mr-1 h-4 w-4" />Добавить
              </Button>
            </div>

            {state.expenses.map((e) => (
              <Card key={e.id} className="rounded-2xl">
                <CardContent className="space-y-3 p-4">
                  <div className="flex gap-2">
                    <input
                      value={e.name}
                      onChange={(ev) => changeExpense(e.id, { name: ev.target.value })}
                      className="flex-1 rounded-xl border px-3 py-2"
                    />
                    <button onClick={() => setConfirmDelete({ type: "expense", id: e.id, name: e.name })}>
                      <Trash2 className="h-5 w-5 text-slate-400" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <NumericInput value={e.amount} onChange={(v) => changeExpense(e.id, { amount: v })} className="rounded-xl border px-3 py-2" />
                    <select value={e.trigger} onChange={(ev) => changeExpense(e.id, { trigger: ev.target.value })} className="rounded-xl border px-3 py-2">
                      <option value="advance">Аванс</option>
                      <option value="salary">Зарплата</option>
                      </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <select value={e.account === "ЕДА" ? "Яндекс" : e.account} onChange={(ev) => changeExpense(e.id, { account: ev.target.value })} className="rounded-xl border px-3 py-2">
                      <option>Яндекс</option>
                      <option>ЕПС</option>
                      <option>Оплатить сразу</option>
                      <option>Подписки</option>
                      <option>Накопления</option>
                    </select>
                    <select value={e.type} onChange={(ev) => changeExpense(e.id, { type: ev.target.value })} className="rounded-xl border px-3 py-2">
                      <option value="fixed">Сумма</option>
                      <option value="split">Поровну</option>
                      <option value="percentSalary">% от ЗП</option>
                    </select>
                  </div>

                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={e.active} onChange={(ev) => changeExpense(e.id, { active: ev.target.checked })} />
                    Активно
                  </label>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {tab === "subs" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Подписки</h2>
              <Button onClick={addSub} size="sm" className="rounded-xl">
                <Plus className="mr-1 h-4 w-4" />Добавить
              </Button>
            </div>

            {state.subscriptions.map((x) => (
              <Card key={x.id} className="rounded-2xl">
                <CardContent className="space-y-3 p-4">
                  <div className="flex gap-2">
                    <input
                      value={x.name}
                      onChange={(ev) => changeSub(x.id, { name: ev.target.value })}
                      className="flex-1 rounded-xl border px-3 py-2"
                    />
                    <button onClick={() => setConfirmDelete({ type: "subscription", id: x.id, name: x.name })}>
                      <Trash2 className="h-5 w-5 text-slate-400" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <NumericInput value={x.price} onChange={(v) => changeSub(x.id, { price: v })} className="rounded-xl border px-3 py-2" />
                    <NumericInput value={x.periodMonths} onChange={(v) => changeSub(x.id, { periodMonths: v })} className="rounded-xl border px-3 py-2" />
                  </div>

                  <select value={x.trigger || "advance"} onChange={(ev) => changeSub(x.id, { trigger: ev.target.value })} className="w-full rounded-xl border px-3 py-2">
                    <option value="advance">С аванса</option>
                    <option value="salary">С зарплаты</option>
                  </select>

                  <div className="flex justify-between rounded-xl bg-slate-100 p-3">
                    <span>В месяц</span>
                    <b>{amountVisible(state, monthlySubscriptionAmount(x))}</b>
                  </div>

                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={x.active} onChange={(ev) => changeSub(x.id, { active: ev.target.checked })} />
                    Активна
                  </label>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </motion.div></div>

      {confirmReset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <Card className="w-full max-w-sm rounded-3xl">
            <CardContent className="space-y-4 p-5">
              <div>
                <h3 className="text-xl font-semibold">Стереть данные?</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Будут удалены все настройки, расходы, подписки и PIN на этом устройстве.
                  Отменить действие нельзя.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="secondary"
                  className="rounded-2xl"
                  onClick={() => setConfirmReset(false)}
                >
                  Нет
                </Button>

                <Button
                  variant="destructive"
                  className="rounded-2xl"
                  onClick={reset}
                >
                  Да, стереть
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {confirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <Card className="w-full max-w-sm rounded-3xl">
            <CardContent className="space-y-4 p-5">
              <div>
                <h3 className="text-xl font-semibold">Удалить запись?</h3>
                <p className="mt-1 text-sm text-slate-500">
                  {confirmDelete.name ? `«${confirmDelete.name}» будет удалена. ` : "Запись будет удалена. "}
                  Отменить действие нельзя.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="secondary"
                  className="rounded-2xl"
                  onClick={() => setConfirmDelete(null)}
                >
                  Нет
                </Button>

                <Button
                  variant="destructive"
                  className="rounded-2xl"
                  onClick={() => {
                    if (confirmDelete.type === "expense") deleteExpense(confirmDelete.id);
                    if (confirmDelete.type === "subscription") deleteSub(confirmDelete.id);
                    setConfirmDelete(null);
                  }}
                >
                  Да, удалить
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

       <div className="fixed inset-x-0 bottom-0 bg-white/95 px-3 pb-4 pt-2 backdrop-blur">
        <div className="mx-auto grid max-w-md grid-cols-6 gap-1.5 rounded-[28px] bg-white p-2 shadow-lg ring-1 ring-slate-200/70">
          <NavButton id="home" icon={HomeIcon} label="Главная" />
          <NavButton id="advance" icon={AdvanceIcon} label="Аванс" />
          <NavButton id="salary" icon={SalaryIcon} label="ЗП" />
          <NavButton id="expenses" icon={ExpensesIcon} label="Траты" />
          <NavButton id="subs" icon={SubscriptionsIcon} label="Подписки" />
          <NavButton id="settings" icon={SettingsIcon} label="Правка" />
        </div>
      </div>
    </div>
  );
}

export default App;
