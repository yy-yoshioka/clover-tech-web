"use client";

import { useMemo, useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import AppLink from "@/src/components/AppLink";
import InternalPageLayout from "@/src/components/layouts/InternalPageLayout";
type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: string;
  budget: string;
  timeline: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const MAX_LENGTH = {
  name: 80,
  company: 120,
  email: 120,
  phone: 30,
  message: 1200,
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  inquiryType: "",
  budget: "未定",
  timeline: "未定",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\-()\s]{6,30}$/;

export default function ContactPage() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const remainingMessageChars = useMemo(
    () => MAX_LENGTH.message - values.message.length,
    [values.message.length]
  );

  const validate = (nextValues: FormState) => {
    const nextErrors: FormErrors = {};

    if (!nextValues.name.trim()) {
      nextErrors.name = "お名前を入力してください。";
    } else if (nextValues.name.length > MAX_LENGTH.name) {
      nextErrors.name = `お名前は${MAX_LENGTH.name}文字以内で入力してください。`;
    }

    if (!nextValues.email.trim()) {
      nextErrors.email = "メールアドレスを入力してください。";
    } else if (!emailPattern.test(nextValues.email)) {
      nextErrors.email = "メールアドレスの形式が正しくありません。";
    } else if (nextValues.email.length > MAX_LENGTH.email) {
      nextErrors.email = `メールアドレスは${MAX_LENGTH.email}文字以内で入力してください。`;
    }

    if (!nextValues.inquiryType.trim()) {
      nextErrors.inquiryType = "ご相談内容を選択してください。";
    }

    if (nextValues.phone.trim()) {
      if (nextValues.phone.length > MAX_LENGTH.phone) {
        nextErrors.phone = `電話番号は${MAX_LENGTH.phone}文字以内で入力してください。`;
      } else if (!phonePattern.test(nextValues.phone)) {
        nextErrors.phone = "電話番号の形式が正しくありません。";
      }
    }

    if (nextValues.company.length > MAX_LENGTH.company) {
      nextErrors.company = `会社名は${MAX_LENGTH.company}文字以内で入力してください。`;
    }

    if (!nextValues.message.trim()) {
      nextErrors.message = "お問い合わせ内容を入力してください。";
    } else if (nextValues.message.length > MAX_LENGTH.message) {
      nextErrors.message = `お問い合わせ内容は${MAX_LENGTH.message}文字以内で入力してください。`;
    }

    return nextErrors;
  };

  const handleChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValues = { ...values, [field]: event.target.value };
      setValues(nextValues);
      if (isSubmitted) {
        setErrors(validate(nextValues));
      }
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setIsSubmitted(true);
  };

  return (
    <InternalPageLayout
      eyebrow="Contact"
      title="お問い合わせ"
      subtitle="受託開発・開発リソース提供・営業代行のご相談をお待ちしています。"
      align="center"
      titleSx={{
        fontSize: { xs: "1.6rem", sm: "2.1rem", md: "2.4rem" },
        whiteSpace: { xs: "nowrap", sm: "normal" },
      }}
    >
      <Box sx={{ px: { xs: 0, sm: 0 } }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
            borderRadius: 4,
            p: { xs: 3, sm: 4 },
            bgcolor: "background.paper",
            border: "1px solid rgba(15, 23, 42, 0.08)",
            width: "100%",
            maxWidth: 720,
            mx: "auto",
          }}
        >
          <Stack spacing={0.5} sx={{ textAlign: "center" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              ご相談内容をお聞かせください
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              内容に応じて、最適な進め方をご提案します。
            </Typography>
          </Stack>

          <TextField
            select
            label="ご相談内容"
            value={values.inquiryType}
            onChange={handleChange("inquiryType")}
            error={Boolean(errors.inquiryType)}
            helperText={
              errors.inquiryType ?? "例：開発 → データ → AI営業（架電）まで"
            }
            required
            fullWidth
          >
            <MenuItem value="受託開発">
              受託開発（業務アプリ／管理画面／CRM）
            </MenuItem>
            <MenuItem value="営業データセット">
              営業データセット（ターゲット抽出・整形）
            </MenuItem>
            <MenuItem value="AI営業（架電）">AI営業（架電）／営業代行</MenuItem>
            <MenuItem value="開発→データ→AI営業">
              開発→データ→AI営業（販売開始まで一気通貫）
            </MenuItem>
            <MenuItem value="採用">採用（業務委託・副業含む）</MenuItem>
            <MenuItem value="その他">その他</MenuItem>
          </TextField>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              label="お名前"
              value={values.name}
              onChange={handleChange("name")}
              error={Boolean(errors.name)}
              helperText={errors.name}
              inputProps={{ maxLength: MAX_LENGTH.name }}
              required
              fullWidth
            />
            <TextField
              label="会社名（任意）"
              value={values.company}
              onChange={handleChange("company")}
              error={Boolean(errors.company)}
              helperText={errors.company}
              inputProps={{ maxLength: MAX_LENGTH.company }}
              fullWidth
            />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              label="メールアドレス"
              value={values.email}
              onChange={handleChange("email")}
              error={Boolean(errors.email)}
              helperText={errors.email}
              inputProps={{ maxLength: MAX_LENGTH.email }}
              required
              fullWidth
            />
            <TextField
              label="電話番号（任意）"
              value={values.phone}
              onChange={handleChange("phone")}
              error={Boolean(errors.phone)}
              helperText={errors.phone ?? "ハイフン可"}
              inputProps={{ maxLength: MAX_LENGTH.phone }}
              fullWidth
            />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              select
              label="ご予算（任意）"
              value={values.budget}
              onChange={handleChange("budget")}
              fullWidth
            >
              <MenuItem value="未定">未定</MenuItem>
              <MenuItem value="〜50万円">〜50万円</MenuItem>
              <MenuItem value="50〜200万円">50〜200万円</MenuItem>
              <MenuItem value="200〜500万円">200〜500万円</MenuItem>
              <MenuItem value="500万円〜">500万円〜</MenuItem>
            </TextField>
            <TextField
              select
              label="開始時期（任意）"
              value={values.timeline}
              onChange={handleChange("timeline")}
              fullWidth
            >
              <MenuItem value="未定">未定</MenuItem>
              <MenuItem value="すぐ">すぐ</MenuItem>
              <MenuItem value="1ヶ月以内">1ヶ月以内</MenuItem>
              <MenuItem value="3ヶ月以内">3ヶ月以内</MenuItem>
              <MenuItem value="それ以降">それ以降</MenuItem>
            </TextField>
          </Stack>

          <TextField
            label="お問い合わせ内容"
            value={values.message}
            onChange={handleChange("message")}
            error={Boolean(errors.message)}
            helperText={errors.message ?? `残り${remainingMessageChars}文字`}
            inputProps={{ maxLength: MAX_LENGTH.message }}
            required
            fullWidth
            multiline
            minRows={6}
            placeholder="例：\n・作りたい業務/機能\n・対象ユーザー（社内/顧客）\n・現状の課題\n・販売までの希望（データ作成/架電の有無）\n"
          />

          <Button type="submit" variant="contained" size="large">
            送信する
          </Button>

          <Typography
            variant="caption"
            sx={{ color: "text.secondary", textAlign: "center" }}
          >
            送信により、
            <AppLink href="/privacy" underline="always">
              プライバシーポリシー
            </AppLink>
            に同意したものとみなします。
          </Typography>

          <Typography
            variant="caption"
            sx={{ color: "text.secondary", textAlign: "center" }}
          >
            ※送信はまだ実装されていません。内容確認用のUIです。
          </Typography>
        </Box>
      </Box>
    </InternalPageLayout>
  );
}
