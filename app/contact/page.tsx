"use client";

import { useMemo, useState } from "react";
import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const MAX_LENGTH = {
  name: 80,
  email: 120,
  message: 1000,
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    if (!nextValues.message.trim()) {
      nextErrors.message = "お問い合わせ内容を入力してください。";
    } else if (nextValues.message.length > MAX_LENGTH.message) {
      nextErrors.message = `お問い合わせ内容は${MAX_LENGTH.message}文字以内で入力してください。`;
    }

    return nextErrors;
  };

  const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
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
    <Box component="main" sx={{ bgcolor: "background.default", color: "text.primary", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="sm">
        <Stack spacing={2} sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="overline" sx={{ color: "text.secondary", letterSpacing: "0.2em" }}>
            Contact
          </Typography>
          <Typography variant="h4">お問い合わせ</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            受託開発・開発リソース提供・営業代行のご相談をお待ちしています。
          </Typography>
        </Stack>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            borderRadius: 4,
            p: { xs: 3, sm: 4 },
            bgcolor: "background.paper",
            border: "1px solid rgba(15, 23, 42, 0.08)",
          }}
        >
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
            label="お問い合わせ内容"
            value={values.message}
            onChange={handleChange("message")}
            error={Boolean(errors.message)}
            helperText={errors.message ?? `残り${remainingMessageChars}文字`}
            inputProps={{ maxLength: MAX_LENGTH.message }}
            required
            fullWidth
            multiline
            minRows={5}
          />
          <Button type="submit" variant="contained" size="large">
            送信する
          </Button>
          <Typography variant="caption" sx={{ color: "text.secondary", textAlign: "center" }}>
            ※送信はまだ実装されていません。内容確認用のUIです。
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
